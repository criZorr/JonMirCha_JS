import hamburguerMenu from "./dom/01_menu_hamburguesa.js";
import { relojDigital, alarm } from "./dom/02_reloj.js";
import { moveBall, shortcuts } from "./dom/03_teclado.js";
import { countdown } from "./dom/04_countdown.js";
import scrollBtn from "./dom/05_scroll_btn.js";
import { darkTheme } from "./dom/06_dark_btn.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    relojDigital("#reloj", "#btn-inciar-r", "#btn-detener-r");
    alarm("./assets/hololive_alarm.mp3", "#btn-inciar-a", "#btn-detener-a");
    countdown("countdown", "February 25, 2024", "Feliz cumpleaños.");
    scrollBtn(".scroll-btn");
    let darkElements = [".main", ".stage"]
    darkTheme(".dark-btn", darkElements)
});

d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})