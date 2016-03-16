$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-throwing, .ryu-still').hide();
    $('.ryu-ready').show();
  });
  $('.ryu').mouseleave(function() {
    $('.ryu-ready, .ryu-throwing').hide();
    $('.ryu-still').show();
  });
  $('.ryu').mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '10000px'},
      500,
      function() {
        $(this).stop();
        $(this).hide();
        $(this).css('left', '520px');
      });
  });
  $('.ryu').mouseup(function() {
    $(".ryu div").hide();
    $('.ryu-ready').show();
  });
});
 // animate hadouken to the right of the screen

 function playCool(){
  $(".ryu div").hide();
  $(".ryu-cool").show();
}
$(document).on("keydown",function(e){
  if (e.keyCode == 88) {
    playCool();
  }
});
$(document).on("keyup",function(e){
 if (e.keyCode == 88) {
  $(".ryu-cool").hide();
  $(".ryu-ready").show();
}
});
function doIntro(){
  $('.sf-logo').fadeIn(3000, function() {
    $(this).fadeOut(1000, function() {
      $('.brought-by').fadeIn(3000, function() {
        $(this).fadeOut(1000, function() {
          $('.jquery-logo').fadeIn(3000, function() {
            $(this).fadeOut(1000, function() {
              $(".how-to").fadeIn(3000, function(){
                $(".how-to p").fadeIn(3000)
                $(function(){
                  doIntro()
                });
              })
            })
          })
        })
      })
    })
  })
}
            // play hadouken sound
   // show hadouken and animate it to the right of the screen
   function playHadouken () {
     $('#hadouken-sound')[0].volume = 0.5;
     $('#hadouken-sound')[0].load();
     $('#hadouken-sound')[0].play();
   }

