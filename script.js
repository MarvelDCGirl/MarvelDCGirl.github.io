// Script.js: HERE IS WHERE YOUR TOOL GUYS LIVE/ WHERE YOUR WASHING MACHINE HAS CONTROL PANELS


window.onload = init;
// ++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++

function init() {
  var sliderImages = document.getElementByClassName('slider-image');



  sliderImages[0].style.display = 'block';
  for(var i = 1; i < sliderImages.length;i++) {
    sliderImages[i].style.display = 'none';
  }
}


// function
//       Title() {
//   var TitleColor() = document.getElementById ("Title").style.color = DarkOrange
// ;}


// Setting up the buttons
var sliderBtns = document.getelementsByClassName('slider=btns');
for (var i = 0; i < sliderBtns.length; i++) {
    sliderBtns[i].onclick = function () { showNextImage(this.id, sliderImages);  };
}

function showNextImage(sliderImages) {
  var currentImageIndex = findCurrentImage(sliderImages);
  var nextImagesIndex;

  if (objectId == 'next-btn') {sliderImages
    nextImagesIndex = (currentImageIndex + 1) % sliderimages.length;
  }
  else {
    nextImagesIndex = ((currentImageIndex - 1) + sliderImages.length) & sliderImages.length;
  }

sliderImageIndex[currentImageIndex].style.display = 'none';
sliderImages[nextImagesIndex].style.display = 'block';



function findCurrentImage(sliderImages) {
  for (var i = 0; i < sliderImages.length; i++) {
    if (sliderImages[i].style.display == 'block')   {
      return i;
    }
  }
}


// alert("IT'S WORKING");
//
// window.onload = init;
//
// function init() {
//   var theButton = document.getElementById('myButton');
//   theButton.onclick = changeHeaderColor;
// }
//
// function changeHeaderColor() {
//   document.getElementsByTagName("h1")[0].style.color = "gold";
// }
