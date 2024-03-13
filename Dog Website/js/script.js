// <------------------MENU--------------------->


function AccountMenu(){
  var nav_menu = document.getElementById('nav_menu');

  if(nav_menu.style.display === 'none'){
    nav_menu.style.display = 'block';
  }else{
    nav_menu.style.display = 'none';
  }
}
// <------------------SEARCH--------------------->

function search_icon(){
  var input = document.getElementById('input');

  if(input.style.display === 'none'){
    input.style.display = 'block';
  }else{
    input.style.display = 'none';
  }
}


// <------------------VIDEO PLAY--------------------->

document.addEventListener("DOMContentLoaded", function() {
  var playButton = document.querySelector('.play-btn');
  var playButton2 = document.querySelector('.play-btn2');
  var popupContainer = document.getElementById('popup-container');
  var popupContainer2 = document.getElementById('popup-container2');
  var closeButton = document.getElementById('close-btn');
  var closeButton2 = document.getElementById('close-btn2');
  var videoFrame = document.getElementById('video-frame');
  var videoFrame2 = document.getElementById('video-frame2');
  
  playButton.addEventListener('click', function() {
    popupContainer.style.display = 'block';
    videoFrame.src = './img/dog_video.mp4'; // Replace 'your-video-url.mp4' with your video URL
  });
  playButton2.addEventListener('click', function() {
    popupContainer2.style.display = 'block';
    videoFrame2.src = './img/dog_video.mp4'; // Replace 'your-video-url.mp4' with your video URL
  });

  closeButton.addEventListener('click', function() {
    popupContainer.style.display = 'none';
    videoFrame.src = ''; // Reset video source
  });
  closeButton2.addEventListener('click', function() {
    popupContainer2.style.display = 'none';
    videoFrame2.src = ''; // Reset video source
  });
});


// <------------------ANIMATION--------------------->

// AOS.init({
//   offset: 300,
//   duration: 1000,
// });


// <------------------COUNTER--------------------->

$('.counter').counterUp({
  delay: 10,
  time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');





