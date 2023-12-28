var slideIndex = 0;
var sweetIdex = 0;
var playing = false;
var pictureIndex = 0;
var sweetPotatoIndex = 0;
/*showSlides(slideIndex);*/

function nextSlide() {
  showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);  
}

function showSlides(n) {
  if(n == -1){slideIndex = 2}
  if(n == 3){slideIndex = 0}

  if(slideIndex == 0)
  {
    document.getElementById("firstProduct").style.display = "flex";
    document.getElementById("secondProduct").style.display = "none";
    document.getElementById("sustainable").style.display = "none";
  }
  else if(slideIndex == 1)
  {
    document.getElementById("firstProduct").style.display = "none";
    document.getElementById("secondProduct").style.display = "flex";
    document.getElementById("sustainable").style.display = "none";
  }
  else if(slideIndex == 2)
  {
    document.getElementById("firstProduct").style.display = "none";
    document.getElementById("secondProduct").style.display = "none";
    document.getElementById("sustainable").style.display = "flex";
  }
}

function nextSweetSlide() {
  showSweetSlides(sweetIdex += 1);
}

function prevSweetSlide() {
  showSweetSlides(sweetIdex -= 1);  
}

function showSweetSlides(n) {
  if(n == -1){sweetIdex = 2}
  if(n == 3){sweetIdex = 0}

  if(sweetIdex == 0)
  {
    document.getElementById("firstSweetPotato").style.display = "block";
    document.getElementById("secondSweetPotato").style.display = "none";
    document.getElementById("thirdSweetPotato").style.display = "none";
  }
  else if(sweetIdex == 1)
  {
    document.getElementById("firstSweetPotato").style.display = "none";
    document.getElementById("secondSweetPotato").style.display = "block";
    document.getElementById("thirdSweetPotato").style.display = "none";
  }
  else if(sweetIdex == 2)
  {
    document.getElementById("firstSweetPotato").style.display = "none";
    document.getElementById("secondSweetPotato").style.display = "none";
    document.getElementById("thirdSweetPotato").style.display = "block";
  }
}

function playAudio() {
  var x = document.getElementById("myAudio");

    if(playing == false)
    {
      x.play();
      playing = true;
    }
    else
    {
      x.pause();
      playing = false;
    }  
  document.getElementById("topic").style.fontSize = "40px";
}
function loadNewImage()
{
  const picture = document.getElementById("potato_picture");
  imageElement = picture.children;
  imageElement[pictureIndex].style.display = "none";
  pictureIndex++;
  if(imageElement[pictureIndex] == null)
  {
    pictureIndex = 0;
  }
  imageElement[pictureIndex].style.display = "block";
}
setInterval(loadNewImage,5000);

function loadNewImage1()
{
  const picture = document.getElementById("sweet_potato_picture");
  imageElement = picture.children;
  imageElement[sweetPotatoIndex].style.display = "none";
  sweetPotatoIndex++;
  if(imageElement[sweetPotatoIndex] == null)
  {
    sweetPotatoIndex = 0;
  }
  imageElement[sweetPotatoIndex].style.display = "block";
}
setInterval(loadNewImage1,5000);