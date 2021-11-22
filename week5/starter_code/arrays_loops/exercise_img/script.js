let myImages = ['https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg', 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d']

let container = O('image-container')

// try adding all your images to the page in a for loop
// I've included a createImage function that will create an image element in html
// But you'll need to run it on each image and use
// container.appendChild(image) on the result
// try adding a button/function that reverses them, or only displays a specific image

function addImages(imageArray) {
  //always zero out the container if we want to run it again
  container.innerHTML = ''
  for(let i = 0; i < myImages.length; i++){
    container.innerHTML += myImages[i];
  }
  // for loop on the array
  // let image = createImage(array[i])
  // container.appendChild(image)
}

O('add-button').onclick = function() {
  let input = O('add-image')
  myImages.push(input.value)
  console.log(myImages)
  // call addImages again to display the new item
  addImages(myImages)
  input.value = ''
}

let reverseBut = document.getElementById("reverse-button");
let randomBut = document.getElementById("random-button");
let newArr = [];


reverseBut.onclick = function(){
  let count = 0;
  for(let i = myImages.length-1; i >= 0; i--){
    newArr[count] = myImages[i];
    count++ 
  }
  myImages = newArr.slice(0);
  addImages(myImages)
}

randomBut.onclick = function(){
  container.innerHTML = '';
  container.innerHTML = myImages[Math.floor(Math.random() * myImages.length)];
}


function createImage(src) {
  let img = document.createElement("img")
  img.setAttribute("src", src)
  return img;
}

addImages(myImages)
