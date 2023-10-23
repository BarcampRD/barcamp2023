
const container = document.getElementById("unconferences-container");
const containerSpeaker = document.getElementById("speakerCardSection");


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
                article.style.position = "absolute";
                article.innerHTML = `
                    <time>Próximamente</time>
                    <div class="lg:px-8 lg:border-r lg:border-l border-primary-10">
                        <h4>${item.title}</h4>
                        <div id="container-tags" class="flex mb-2 flex-wrap gap-2">
                            <span class="tag host">${item.name}</span>
                        </div>
                        <p>${item.abstract}</p>
                    </div>
                    <div class="lg:pl-8 lg:mt-0 mt-4">
                        <a class="btn btn-outline-primary btn-large">Sala #</a>
                    </div>
                `;

                // Almacena el contenedor de etiquetas creado en esta iteración
                containerTags = article.querySelector("#container-tags");

                // Agregar etiquetas dinámicamente
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
                    <p>Hola mundo</p>
                    <ul class="speaker-contact">
                        <li><a><i class="icon-youtube"></i></a></li>
                        <li><a><i class="icon-twitter"></i></a></li>
                        <li><a><i class="icon-github"></i></a></li>
                    </ul>
                </div>
                `;

                // Almacena el contenedor de etiquetas creado en esta iteración
                containerSpeaker.appendChild(speaker)
            }
        });
    }
}





http.open('get', '../data/charlistas.json', true);

http.send();
console.log(http);

