(async () => {
  const artCont = document.getElementById("art_cont");
  const art_count = 100;
  const shuffleBut = document.getElementById("shuffle");

  function randomInt() {
    return Math.floor(Math.random() * 823156);
  }

  shuffleBut.addEventListener("click", async function () {
    artCont.innerHTML = "";
    await getArt();
  });

  const getArt = async () => {
    const id = randomInt();
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;

    try {
      const res = await fetch(url);
      const art = await res.json();
      artCard(art);
    } catch {
      await getArt();
    }
  };

  await getArt();

function artCard(art) {
        if(art.isPublicDomain)
        {
            const artEl = document.createElement("div");
            artEl.classList.add("art");
        
            const title = art.title[0].toUpperCase() + art.title.slice(1);
        
            const artInnerCode = `
            <a href="${art.objectURL}" target="_blank">
                <div class="img-cont" id = "art-img">
                    <img src="${art.primaryImageSmall}">
                </div>
            </a>

            <div class="info">
                <p class="name">${art.artistDisplayName} ${art.accessionYear} - ${art.title} </p> <br/>
            </div>
            `;
        
            artEl.innerHTML = artInnerCode;
            artCont.appendChild(artEl);
        }
        else
        {
            getArt(art);
        }
  }
})();
