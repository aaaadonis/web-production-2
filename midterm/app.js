const artCont = document.getElementById("art_cont");
const art_count = 100;
const shuffleBut = document.getElementById("shuffle")



function randomInt(){
    return Math.floor(Math.random() * 436535);
}


shuffleBut.addEventListener("click", async function(){
    artCont.innerHTML = ""
    await fetchArt();
})


const fetchArt = async () =>{
        if(getArt(randomInt()).objectID === undefined){
            return
        }else{
            await getArt(randomInt())
        }
}


const getArt = async id => {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;

    const res = await fetch(url);
    const art = await res.json();
    artCard(art);
}

await fetchArt();

function artCard(art){
    const artEl = document.createElement('div');
    artEl.classList.add('art');

    const title = art.title[0].toUpperCase() + art.title.slice(1);

    const artInnerCode = `
    <a href="${art.objectURL}" target="_blank"><div class="img-cont">
        <img src="${art.primaryImageSmall}"
    </div></a>
    <div class="info">
        <p class="name">${art.artistDisplayName} ${art.accessionYear} - ${art.title} </p> <br/>
    </div>
    `;

    artEl.innerHTML = artInnerCode;
    artCont.appendChild(artEl);
}