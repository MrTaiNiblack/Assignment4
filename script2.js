(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var namesI = names[i];
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === "j") {
            byeSpeaker.speak(namesI);
        } else {
            helloSpeaker.speak(namesI);
        }
    }
})();