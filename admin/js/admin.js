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
		
})