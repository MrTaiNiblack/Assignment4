(function (window) {
    var byeSpeaker = {};
    var speakWord = "Good Bye";
    byeSpeaker.speak = function (namesI) {
        console.log(speakWord + "  " + namesI)
    }

    window.byeSpeaker = byeSpeaker;

})(window);