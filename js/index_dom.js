import hamburguerMenu from "./dom/01_menu_hamburguesa.js";
import {relojDigital, alarm} from "./dom/02_reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    relojDigital("#reloj", "#btn-inciar-r", "#btn-detener-r");
    reloj("start", "#btn-inciar-a", "alarma");
    reloj("stop", "#btn-detener-a", "alarma");
});