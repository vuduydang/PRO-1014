$(document).ready(function(){
	if (window.File && window.FileReader && window.FileList && window.Blob){
		$("input[name*='thumbnail']").focusout(function(){
			var thumbnail 	= $("input[name*='thumbnail']")[0].files[0];
			if (thumbnail!=null) {
				$(this).parent().children("span.browser").css('background','green');
			}
		})
		$("input[name*='banner']").focusout(function(){
			var banner 		= $("input[name*='banner']")[0].files[0];
			if (banner!=null) {
				$(this).parent().children("span.browser").css('background','green');
			}
		})

		
	}else{
		alert('Nâng cấp trình duyệt, không thì đập máy đi !');
	}
		
});

// push-parts-films
$(document).ready(function(){
	$("button").click(function(){
	    	// $(".addfilms").css('display','none');
	    	$(".loader").css('display','block');
	  	});
	$(document).on('click', '#push-part', function() {
		// var player	  = $("input[name*='player']").val();
		var formData = new FormData();
			// formData.append('file', $("input[name*='file_film']")[0].files[0]);
			formData.append('file', $("input[name*='file_film']").prop('files')[0]);
			formData.append('film_id', $("input[name*='film_id']").val());
			formData.append('name', $("input[name*='name_part']").val());
			formData.append('status', $("select[name*='status']").val());

        $.ajax({
                url: "push-parts.php",
                type: "post",
                dataType: "text",
                cache: false,
		       	processData: false,  
		       	contentType: false,  
		       	async:true,
                data: formData,
                success: function (msg) {
                	console.log(msg);
                	if (msg != "") {
                    	alert(msg);
                    	// location.reload();
		            }else{
		            	location.assign("./manager.php");
		            }
                },
                error: function(){
                	alert("Uplaod thất bại. Cần check lại !");
                }
            })
	});
})