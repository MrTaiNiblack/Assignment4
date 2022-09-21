(function (window) {
    var helloSpeaker = {};
    var speakWord = "Hello";
    helloSpeaker.speak = function (namesI) { 
      console.log(speakWord + " " + namesI);
      }
  
  window.helloSpeaker = helloSpeaker;
  
  })(window);