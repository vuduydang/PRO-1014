// Set the name of the hidden property and the change event for visibility
var hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") { 
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}
 

var videoElement = document.getElementById("my-video");
var source = document.getElementById("source");
var videoT = document.getElementsByTagName("video")[0];

function handleVisibilityChange() {
  setTimeout(function(){
    if (document[hidden]) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
  }, 1000);
}

if (typeof document.addEventListener === "undefined" || hidden === undefined) {
  console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else { 
  // document.addEventListener(visibilityChange, handleVisibilityChange, false);

}


// $(document).on('click', 'video#my-video_html5_api', function(){
//   var i = 0;
//         if (this.paused) {
//         } else {
//           var time = setInterval(function(){
//             i += 1;
//             console.log(i);
//           }, 1000);
//           clearInterval(time);
//         }
// });

//             var i = 0;
// var video = $('video');
// console.log(video);
// if (video.paused) {
//           clearInterval(time);
//         } else {
//           var time = setInterval(function(){
//             i += 1;
//             console.log(i);
//           }, 1000);
//         }

// var time = setInterval(function(){
//             i+=1;
//             console.log(i)
//           }, 1000);


// main
// $(document).ready(function(){
//   var ads_2 = `<a href="https://vnfbs.com/promo/trade-100usd?ppu=13048905" target="_blank" style="outline: none"><img src="https://vnfbs.com/upload/promo/banner/064d828d60dc4ab76d937967e0489d06.gif?ppu=13048905" width="880" height="120" border="0"></a>`;
//   $('.ads-2').each(function(){
//     $(this).append(ads_2)
//   })
// })

