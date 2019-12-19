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
 
var pauseOff = document.getElementsByName("ctr-pause")[0];
pauseOff.onclick = function(){
  document.getElementById("my-video").setAttribute('id','my-video-off');
}
var videoElement = document.getElementById("my-video");
var source = document.getElementById("source");
var videoT = document.getElementsByTagName("video")[0];
console.log(source.src);
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
  // Handle page visibility change   
  document.addEventListener(visibilityChange, handleVisibilityChange, false);

}

$.()
$(document).on('click', 'video', function(){
  var i = 0;
        if (this.paused) {
          clearInterval(time);
        } else {
          var time = setInterval(function(){
            i = "aa";
          }, 1000);
        }
  console.log(i);
});