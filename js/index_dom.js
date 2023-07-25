import hamburguerMenu from "./dom/01_menu_hamburguesa.js";
import reloj from "./dom/02_alarma_sonora.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    reloj("start", "#btn-inciar-r", "btns-reloj");
    reloj("stop", "#btn-detener-r", "btns-reloj");
    reloj("start", "#btn-inciar-a", "alarma");
    reloj("stop", "#btn-detener-a", "alarma");
});