(function () {
    "use strict"; // Start of use strict

    //adding audio player on demand
    const listenButton = $('.js-listen');

    listenButton.one("click", (function () {
        let player = "<audio controls autoplay><source src=\"music/Vivaldi_largo.mp3\" type=\"audio/mpeg\"></audio>";
        $('.js-audio').append(player);
    }));

    //toogling audio play/pause on listen button 
    listenButton.click(function () {
        if (listenButton.text() === "pauza") {
            $("audio").get(0).pause();
        } else {
            $("audio").get(0).play();
        }
        $(this).text(function (i, text) {
            return text === "posłuchaj" ? "pauza" : "posłuchaj";
        })
    });

})();