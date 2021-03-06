
$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-throwing, .ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready, .ryu-throwing').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
			);
	})
	.mouseup(function() {
		$('.ryu-still, .ryu-throwing').hide();
		$('.ryu-ready').show();
	});
  // animate hadouken to the right of the screen
})

    // play hadouken sound
    // show hadouken and animate it to the right of the screen
    function playHadouken () {
    	$('#hadouken-sound')[0].volume = 0.5;
    	$('#hadouken-sound')[0].load();
    	$('#hadouken-sound')[0].play();
    }