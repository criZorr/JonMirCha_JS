const d = document;

export function relojDigital(clock, btnPlay, btnStop) {
    let clockTempo;

    d.addEventListener("click", e => {
        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(() => {
                let hora = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${hora}</h3>`;
            }, 1000);

            e.target.disabled = true;
        };  

        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        };
    });
};

export function alarm(btnPlay, btnStop) {
    let sound = new Audio("./assets/hololive_alarm.mp3")
    d.addEventListener("click", e => {
        if (e.target.matches(btnPlay)) {
            sound.load();
            sound.play();
            e.target.disabled = true;
        };

        if (e.target.matches(btnStop)) {
            sound.pause();
            d.querySelector(btnPlay).disabled = false;
        };
    }); 
};