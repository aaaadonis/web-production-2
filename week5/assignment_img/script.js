let randHeight = () => {
  return Math.floor((Math.random() * window.innerHeight) - 100)
}
let randWidth = () => {
  return Math.floor((Math.random() * window.innerWidth) - 100)
}

let imgCont = document.getElementById('image-container')
let shuffleBut = document.getElementById('shuffle')

let myImages = [{'src': 'dog1.png', 'height': '80px', 'width': '80px', 'top': `${randHeight()}px`, 'left': `${randWidth()}px`, 'caption': 'A handsome boi'}, 
{'src': 'dog2.png', 'top': `${randHeight()}px`, 'left': `${randWidth()}px`, 'height': '100px', 'width': '100px', 'caption': 'A floofy boi'},
{'src': 'dog3.png', 'top': `${randHeight()}px`, 'left': `${randWidth()}px`, 'height': '100px', 'width': '100px', 'caption': 'A scary boi'},
{'src': 'dog4.png', 'top': `${randHeight()}px`, 'left': `${randWidth()}px`, 'height': '100px', 'width': '100px', 'caption': 'A wise boi'},
{'src': 'dog5.png', 'top': `${randHeight()}px`, 'left': `${randWidth()}px`, 'height': '100px', 'width': '100px', 'caption': 'A happy boi'}
]

let clear = [{}]


function addImages(imageArray) {
  let container = O('image-container')
  for(let i = 0; i < imageArray.length; i++){
    let imgDiv = createImage(imageArray[i]);
    imgDiv.innerHTML += `<p> ${imageArray[i].caption} </p>`
    container.appendChild(imgDiv);
  }
  //loop over our list of objects
    //inside the loop
    //create an image div
    //let imgDiv = createImage(imageArray[i])
    //add caption:
    //imgDiv.innerHTML += "<p>" + imageArray[i].caption + "</p>"
  //container.appendChild(imgDiv)
}

function createImage(imageObject) {
  // create the element to add to the page
  // we're using a div so we can add things like captions to it
  let containerDiv = document.createElement("div")
  //set container class
  containerDiv.className = "image-container"
  //set container div styles
  S(containerDiv).top = imageObject.top
  S(containerDiv).left =  imageObject.left
  let img = document.createElement("img")
  // set image attributes
  img.setAttribute("src", imageObject.src);
  //set image style
  S(img).height = imageObject.height;
  S(img).width = imageObject.width
  //add the image to our container div
  containerDiv.appendChild(img)
  console.log(randWidth());
  return containerDiv;
}

addImages(myImages)

shuffleBut.addEventListener('click', function(){
  imgCont.innerHTML = ''
  addImages(myImages)
})