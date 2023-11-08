const container = document.getElementById("unconferences-container");
const containerSpeaker = document.getElementById("speakerCardSection");
const containerSpeakerHidden = document.getElementById("speakerCardDisplay");

const http = new XMLHttpRequest();

http.onreadystatechange = () => {
    if(http.readyState == 4 && http.status == 200) {
        let datos = JSON.parse(http.response)
        console.log(datos);
        let containerTags = null;

        datos.forEach(item => {
            if (item.state == "accepted") {
                const article = document.createElement("article");
                article.classList.add("uncoferences-card")
                article.classList.add("software")
                article.innerHTML = `
                    <time>${item.hora}</time>
                    <div class="lg:px-8 lg:border-r lg:border-l border-primary-10">
                        <h4>${item.title}</h4>
                        <div id="container-tags" class="flex mb-2 flex-wrap gap-2">
                            <span class="tag host">${item.name}</span>
                        </div>
                        <p>${item.abstract}</p>
                    </div>
                    <div class="lg:pl-8 lg:mt-0 mt-4">
                        <a class="btn btn-outline-primary btn-large">${item.sala}</a>
                    </div>
                `;
                containerTags = article.querySelector("#container-tags");

                item.tags.forEach(tag => {
                    const tagElement = document.createElement("span");
                    tagElement.classList.add("tag", "software");
                    tagElement.innerText = tag;
                    containerTags.appendChild(tagElement);
                });

                container.appendChild(article)
            }
        });
        datos.forEach(item => {
            if (item.state == "accepted") {
                const speaker = document.createElement("div");
                speaker.classList.add("speaker-card");
                speaker.id=`speaker-${item.name.replace(/\s/g, "")}`
                speaker.innerHTML = `
                <figure class="speaker-image">
                    <img src="${item.avatar}" alt="Dulce">
                </figure>
                <div class="speaker-information">
                    <h5>${item.name}</h5>
                    <p>${item.bio_2}</p>
                    <ul class="speaker-contact">
                        <li><a><i class="icon-youtube"></i></a></li>
                        <li><a><i class="icon-twitter"></i></a></li>
                        <li><a><i class="icon-github"></i></a></li>
                    </ul>
                </div>
                `;

                containerSpeaker.appendChild(speaker)
            }
        });

        datos.forEach(item => {
    
                const speaker = document.createElement("div");
                speaker.className = "modal bio-modal hidden";
                speaker.id = `${item.name.replace(/\s/g, "")}`;
                speaker.innerHTML = `
                
                <div class="modal-content">
                    <div class="modal-header">
                        <a href="javascript:;" class="btn-icon btn-solid-secondary btn-xsmall close-modal"><i class="icon-close"></i></a>
                    </div>
                    <div class="modal-body">
                        <figure>
                            <img src="${item.avatar}" alt="Icon">
                        </figure>
                        <div class="md:px-12 lg:py-[72px] md:py-12 p-8">
                            <h4 class="mb-4">${item.name}</h4>
                            <span class="tag default mb-4">${item.carrear}</span>
                            <p>${item.bio}</p>
                        </div>
                    </div>
                </div>
                
                `;
                containerSpeakerHidden.appendChild(speaker)
            
            
        });

    }
}


http.open('get', '../data/charlistas.json', false);

http.send();





