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

// Warn if the browser doesn't support addEventListener or the Page Visibility API
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