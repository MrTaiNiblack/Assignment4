(function (window) {
    var helloSpeaker = {};
    var speakWord = "Hello";
    helloSpeaker.speak = function (namesI) {
        console.log(speakWord + "  " + namesI)
    }

    window.byeSpeaker = helloSpeaker;
    
})(window);