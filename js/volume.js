var isVolumeOn=false;
$("#volume-control").on("click",function(){
	console.log("volume control clicked");
	$("#volume-control i").removeClass("active");
	if(true==isVolumeOn){
		$(".volume-control-off").addClass("active");
		isVolumeOn=false;
	}
	else {
		$(".volume-control-on").addClass("active");
		isVolumeOn=true;
	}
	// body...
})