const d = document;

export function countdown(selector, day, month, year) {
    let date = new Date(year, month - 1, day);

    let countdownTempo;

    countdownTempo = setInterval(() => {
        let now = new Date();
        let seconds = 59 + date.getSeconds() - now.getSeconds();
        let minutes = 59 + date.getMinutes() - now.getMinutes();
        let hours = 23 + date.getHours() - now.getHours();
        let days = (date - now) / (1000 * 3600 * 24);
        days = Math.floor(days);

        d.querySelector(selector).innerHTML = `<h3> ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos.</h3>`;
    }, 1000);
}