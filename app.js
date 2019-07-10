window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    pads.forEach((pad, index) => {
        console.log(2);
        window.addEventListener('keydown', function(e) {
            if (e.keyCode == pad.getAttribute('key')) {
                sounds[index].currentTime = 0;
                sounds[index].play();
            }
        })
    });
});