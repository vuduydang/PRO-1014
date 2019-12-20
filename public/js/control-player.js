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
                // videoElement.play();
                console.log('success');
            },
            error : function(){
                console.log('lỗi kết nối !');
            }
        })
	});
	var timeLine = setInterval(rehist,1000)

    //click clear auto pause
    var status = 'on';
    $("span[name='ctr-pause']").click(function(){
       if (status == 'on') {
            clearInterval(timeLine);
            status = 'off';
            $(this).css('color','#333333');
            $(this).children('i').css('transform','rotate(180deg)');
       }else{
            timeLine = setInterval(rehist,1000)
            status = 'on';
            $(this).css('color','green');
            $(this).children('i').css('transform','rotate(0deg)');
       }
    })
     
    function rehist(){
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
    }

});