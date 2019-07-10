window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    pads.forEach((pad, index) => {
        window.addEventListener('keydown', function(e) {
            if (e.keyCode == pad.getAttribute('key')) {
                sounds[index].currentTime = 0;
                sounds[index].play();
                pad.style.color = 'white';
            }
        })
        window.addEventListener('keyup', function(e) {
            if (e.keyCode == pad.getAttribute('key')) {
                pad.style.color = 'gray';
            }
        })
    });
});