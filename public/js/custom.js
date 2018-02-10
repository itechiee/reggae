$('#reggae-playButton,#rooftop-reggae-playButton').click(function(){
  var videoId = $(this).attr('video-id');
  var reggaeVideo = document.getElementById(videoId);
    if (reggaeVideo.paused) {			
      reggaeVideo.play();
    } else {
      reggaeVideo.pause();
    }
    $(this).hide();
});
$(document).ready(function(){          
$('.close-button').click(function(){
  document.getElementById("reggae-video").pause();
});

$('.destinations__pod').click(function(){
    var imageId = $(this).attr('id');
    var imgSrc = $('#'+imageId+' .destinations__pod-image').attr('src');
    var imgDataInterchange = $('#'+imageId+' .destinations__pod-image').attr('data-interchange');
    var imagecaption = $('#'+imageId+' a span').text();
    $('#reggaeGalleryModal .gallery__caption #gallery__caption-text').html(imagecaption);
    $('#reggaeGalleryModal .gallery__caption #ReggaeGalleryImage').html('<img src="'+imgSrc+'" data-interchange="'+imgDataInterchange+'" />');
    $('#reggaeGalleryModal').foundation('open');
});


$('#burgerMenu').click(function(){
  $('.responsive-menu').toggleClass('expand');
})

$('.responsive-menu ul li a').click(function(){
    $('#burgerMenu').trigger('click');
});
});