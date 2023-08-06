import hamburguerMenu from "./dom/01_menu_hamburguesa.js";
import { relojDigital, alarm } from "./dom/02_reloj.js";
import { moveBall, shortcuts } from "./dom/03_teclado.js";
import { countdown } from "./dom/04_countdown.js";
import scrollBtn from "./dom/05_scroll_btn.js";
import { darkTheme } from "./dom/06_dark_btn.js";
import responsiveMedia from "./dom/07_objeto_responsive.js";
import responsiveTester from "./dom/08_responsive_tester.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    relojDigital("#reloj", "#btn-inciar-r", "#btn-detener-r");
    alarm("./assets/hololive_alarm.mp3", "#btn-inciar-a", "#btn-detener-a");
    countdown("countdown", "February 25, 2024", "Feliz cumpleaños.");
    scrollBtn(".scroll-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://youtu.be/ob4bpZnmF5o" target="blank" rel="noopener">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/ob4bpZnmF5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        );
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/SstqDKiuxbLUzNbb8" target="blank" rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7984812695104!2d-78.49341842477972!3d-0.1806849354175794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59bdc46234671%3A0x32ad006a725a1a58!2sCheems%20Ec%20Heladeria%2C%20Cafeteria%20and%20Fast%20Food!5e0!3m2!1ses-419!2sec!4v1691181958887!5m2!1ses-419!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
    responsiveTester("test-URL", "test-width", "test-height", ".test-open", ".test-close");
});

d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-btn", "dark-mode");