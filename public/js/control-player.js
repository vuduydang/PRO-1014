jQuery(document).ready(function($) {

	var source = document.getElementById("source");
	  sessionStorage.setItem('url', source.src);
	var videoElement = document.getElementById("my-video");
	setInterval(function(){
	var videoUrl = sessionStorage.getItem('url');
		if (source.src != videoUrl) {
			videoElement.pause();
		}else{
			videoElement.play();
		}
	console.log(videoUrl);
	console.log(source.src);
	},2000);


	// if (typeof(Storage) !== "undefined") {
	//     sessionStorage.setItem('url', source.src);
	// } else {
	//     alert('Trình duyệt của bạn không hỗ trợ local storage');
	// }

});