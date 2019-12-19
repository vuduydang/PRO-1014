jQuery(document).ready(function($) {
	

	var source = document.getElementById("source");
	var videoElement = document.getElementById("my-video");

	$('#player').click(function(){
		var userId = $('.container').data('id');
		var partId = $('.container').data('episode-id');
		$.ajax({
            url: "http://localhost/Git/PRO-1014/router/get-history.php",
            type: "POST",
            dataType: 'text',
            data: {
                'user' : userId,
                'part': partId,
                'empty': 'true'
            },
            success : function(msg){
            	console.log(msg)
                videoElement.play();
            },
            error : function(){
                console.log('lỗi kết nối !');
            }
        })
	});

	setInterval(function(){
		var userId = $('.container').data('id');
		var partId = $('.container').data('episode-id');
		$.ajax({
            url: "http://localhost/Git/PRO-1014/router/get-history.php",
            type: "POST",
            dataType: 'text',
            data: {
                'user' : userId,
                'part': partId
            },
            success : function(msg){
                    if (partId != msg) {
                    	videoElement.pause();
                    }
            },
            error : function(){
                console.log('lỗi kết nối !');
            }
        })
	},1000)

});