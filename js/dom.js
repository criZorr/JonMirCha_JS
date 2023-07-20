// console.log(window);
// console.log(document);
// let texto = "Hola, soy criZorr."
// const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
//hablar(texto);

//Elementos del documento
{
    console.group("01 - Elementos del documento");

    console.log(window.document);
    console.log(document);
    console.log(document.head);
    console.log(document.body);
    console.log(document.documentElement);
    console.log(document.doctype);
    console.log(document.characterSet);
    console.log(document.title);
    console.log(document.links);
    console.log(document.images);
    console.log(document.forms);
    console.log(document.styleSheets);
    console.log(document.scripts);
    setTimeout(() => {
        console.log(document.getSelection().toString());
    }, 500);

    document.write("<h2>Hola JasvaScript desde el DOM</h2>")

    console.groupEnd();
}

//Nodos, Elementos y Selectores
{
    console.group("02 - Nodos, Elementos y Selectores");

    console.log(document.getElementsByTagName("li"));
    console.log(document.getElementsByClassName("card"));
    console.log(document.getElementsByName("nombre"));

    console.log(document.getElementById("menu"));

    console.log(document.querySelector("#menu"));
    console.log(document.querySelector("a"));
    console.log(document.querySelectorAll("a"));
    console.log(document.querySelectorAll("a").length);
    document.querySelectorAll("a").forEach(el => {console.log(el);});

    console.log(document.querySelector(".card"));
    console.log(document.querySelectorAll(".card"));
    console.log(document.querySelectorAll(".card")[2]);

    console.log(document.querySelector("#menu li"));
    console.log(document.querySelectorAll("#menu li"));

    console.groupEnd();
}

//DOM: Atributos y Data-Attributes
{
    console.group("03 - DOM: Atributos y Data-Attributes");

    console.log(document.documentElement.lang);
    console.log(document.documentElement.getAttribute("lang"));
    console.log(document.querySelector(".link-dom").href);
    console.log(document.querySelector(".link-dom").getAttribute("href"));

    document.documentElement.lang = "en";
    console.log(document.documentElement.lang);

    document.documentElement.setAttribute("lang", "es-MX");
    console.log(document.documentElement.lang);

    const $linkDOM = document.querySelector(".link-dom");

    $linkDOM.setAttribute("target", "_blank");
    $linkDOM.setAttribute("rel", "noopener");
    $linkDOM.setAttribute("href", "https://www.youtube.com/@criZorr");
    console.log($linkDOM.hasAttribute("rel"));

    $linkDOM.removeAttribute("rel");
    console.log($linkDOM.hasAttribute("rel"));

    //Data-Attributes
    console.log($linkDOM.getAttribute("data-description"));
    console.log($linkDOM.dataset);
    console.log($linkDOM.dataset.description);
    $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")
    console.log($linkDOM.dataset.description);
    $linkDOM.dataset.description = "Suscríbete a mi canal y comparte.";
    console.log($linkDOM.dataset.description);
    console.log($linkDOM.hasAttribute("data-id"));

    console.groupEnd();
}

//console.group("04 - Estilos y variables CSS")
{
    console.group("04 - Estilos y variables CSS");

    const $linkDOM = document.querySelector(".link-dom");

    console.log($linkDOM.style);
    console.log($linkDOM.getAttribute("style"));
    console.log($linkDOM.style.backgroundColor);
    console.log($linkDOM.style.color);
    console.log(window.getComputedStyle($linkDOM));
    console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

    $linkDOM.style.setProperty("text-decoration", "none");
    $linkDOM.style.setProperty("display", "block");
    $linkDOM.style.width = "50%";
    $linkDOM.style.textAlign = "center";
    $linkDOM.style.marginLeft = "auto";
    $linkDOM.style.marginRight = "auto";
    $linkDOM.style.padding = "1rem";
    $linkDOM.style.borderRadius = ".5rem";

    console.log($linkDOM.style);
    console.log($linkDOM.getAttribute("style"));
    console.log(getComputedStyle($linkDOM));

    //Variables CSS - Custom Properties CSS
    
    const $html = document.documentElement,
    $body = document.body;

    let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

    console.log(varDarkColor, varYellowColor);

    $body.style.backgroundColor = varDarkColor;
    $body.style.color = varYellowColor;

    $html.style.setProperty("--dark-color", "#111");
    varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

    $body.style.setProperty("background-color", "#222");

    console.groupEnd();
}

//
{
    console.group("05 - Clases CSS");

    const $card = document.querySelector(".card");

    console.log($card);
    console.log($card.className);
    console.log($card.classList);
    console.log($card.classList.contains("rotate-45"));

    $card.classList.add("rotate-45");
    console.log($card.classList.contains("rotate-45"));
    console.log($card.className);
    console.log($card.classList);

    $card.classList.remove("rotate-45");
    console.log($card.classList.contains("rotate-45"));

    $card.classList.toggle("rotate-45");
    console.log($card.classList.contains("rotate-45"));

    $card.classList.toggle("rotate-45");
    console.log($card.classList.contains("rotate-45"));

    $card.classList.toggle("rotate-45");
    $card.classList.replace("rotate-45", "rotate-135");

    $card.classList.add("opacity-80", "sepia");
    $card.classList.remove("opacity-80", "sepia");

    $card.classList.toggle("opacity-80", "sepia");

    console.log($card.className);

    console.groupEnd();
}

{
    console.group("06 - Texto y HTML");

    const $whatIsDOM = document.getElementById("que-es");

    let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
    Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JavaScript.
    </p>
    <p>
    El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.
    </p>
    `;

    //$whatIsDOM.innerText = text;
    $whatIsDOM.textContent = text;
    $whatIsDOM.innerHTML = text;
    $whatIsDOM.outerHTML = text;

    console.groupEnd();
}

//DOM Traversing: Recorriendo el DOM
{
    console.group("07 - DOM Traversing: Recorriendo el DOM");

    const $cards = document.querySelector(".cards");

    console.log($cards);
    console.log($cards.children);
    console.log($cards.children[2]);
    console.log($cards.parentElement);
    console.log($cards.firstChild);
    console.log($cards.lastChild);
    console.log($cards.previousElementSibling);
    console.log($cards.nextElementSibling);
    console.log($cards.closest("div"));
    console.log($cards.closest("body"));
    console.log($cards.children[3].closest("section"));

    console.groupEnd();
}

//Creando Elementos y Fragmentos
{
    console.group("08 - Creando Elementos y Fragmentos");

    const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");

    $img.setAttribute("src", "https://picsum.photos/200/200?animals");
    $img.setAttribute("alt", "Animals");
    $figure.classList.add("card");

    $figcaption.appendChild($figcaptionText);
    
    $figure.appendChild($img);
    $figure.appendChild($figcaption);

    $cards.appendChild($figure);

    $figure2.innerHTML = `
    <img src="https://picsum.photos/200/200?people" alt="People">
    <figcaption>People</figcaption>
    `;
    $figure2.classList.add("card");

    $cards.appendChild($figure2);

    const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

    document.write("<h3>Estaciones del año</h3>");
    document.body.appendChild($ul);

    estaciones.forEach(el => {
        const $li = document.createElement("li");
        $li.textContent = el;
        $ul.appendChild($li);
    });

    const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
    $ul2 = document.createElement("ul");

    document.write("<h3>Continentes del mundo</h3>");
    document.body.appendChild($ul2);

    $ul2.innerHTML = "";
    continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`);

    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "setiembre", "octubre", "noviembre", "diciembre"],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

    meses.forEach(el => {
        const $li = document.createElement("li");
        $li.textContent = el;
        $fragment.appendChild($li);
    });

    document.write("Meses del año");
    $ul3.appendChild($fragment);
    document.body.appendChild($ul3);

    console.groupEnd();
}

//Templates HTML
{
    console.group("09 - Templates HTML");

    const $cards = document.querySelector(".cards"),
    $template9 = document.getElementById("template-card").content,
    $fragment9 = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnología",
            img: "https://picsum.photos/200/200?tech",
        },
        {
            title: "Animales",
            img: "https://picsum.photos/200/200?animals",
        },
        {
            title: "Arquitectura",
            img: "https://picsum.photos/200/200?arch",
        },
        {
            title: "Gente",
            img: "https://picsum.photos/200/200?people",
        },
        {
            title: "Naturaleza",
            img: "https://picsum.photos/200/200?nature",
        }
    ];

    cardContent.forEach(el => {
        $template9.querySelector("img").setAttribute("src", el.img);
        $template9.querySelector("img").setAttribute("alt", el.title);
        $template9.querySelector("figcaption").textContent = el.title;

        let $clone = document.importNode($template9, true);
        $fragment9.appendChild($clone);
    });

    $cards.appendChild($fragment9);

    console.groupEnd();
}

//Modificando Elementos (Old Style)
{
    console.group("10 - Modificando Elementos (Old Style)");

    const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure")
    $cloneCards = $cards.cloneNode(true);

    $newCard.innerHTML=`
    <img src="https://picsum.photos/200/200?any" alt="Any">
    <figcaption>Any</figcaption>
    `;

    $newCard.classList.add("card");

    $cards.replaceChild($newCard, $cards.children[2]);
    $cards.insertBefore($newCard, $cards.firstElementChild);
    $cards.removeChild($cards.lastElementChild);

    document.body.appendChild($cloneCards);

    console.groupEnd();
}

//Modificando Elementos (Cool Style)
{
    console.group("11 - Modificando Elementos (Cool Style)");

    /*
    .insertAdjacent...
        .insertAdjacentElemento(position, el)
        .insertAdjacentHTML(position, html)
        .insertAdjacentText(position, text)

    Posiciones:
        beforebegin(hermano anterior)
        afterbegin(primer hijo)
        beforeend(último hijo)
        afterend(hermano siguiente)
    */

    const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

    let $contenCard=`
    <img src="https://picsum.photos/200/200?any" alt="Any">
    <figcaption></figcaption>
    `;

    $newCard.classList.add("card");

    $newCard.insertAdjacentHTML("beforeend", $contenCard);
    $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "AnyOwO")
    //$cards.insertAdjacentElement("afterbegin", $newCard);

    //$cards.prepend($newCard);
    //$cards.append($newCard);
    //$cards.before($newCard);
    //$cards.before($newCard);

    console.groupEnd();
}

//Manejadores de Eventos 
{
    console.group("12 - Manejadores de Eventos");

    function holaMundo(){
        alert("Hola mundo");
        console.log(event);
    };

    function saludar(nombre = "Guapote") {
        alert(`Hola ${nombre}.`);
        console.log(event);
    };

    const $eventoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple"),
    $eventoRemover = document.getElementById("evento-remover");

    $eventoSemantico.onclick = holaMundo;
    $eventoSemantico.onclick = function (e){
        alert("Hola Manejador de Eventos Semántico");
        console.log(e);
        console.log(event);
    };

    $eventoMultiple.addEventListener("click", holaMundo);
    $eventoMultiple.addEventListener("click", (e) => {
        alert("Hola Manejador de Eventos Múltiple");
        console.log(e);
        console.log(e.type);
        console.log(e.target);
        console.log(event);
    });

    //Pasar parámetros
    $eventoMultiple.addEventListener("click", () => {
        saludar();
        saludar("criZorr");
    });

    //Remover eventos

    const removerDobleClick = (e)=>{
        alert(`Removiendo el evento de tipo: ${e.type}`);
        console.log(e);
        $eventoRemover.removeEventListener("dblclick", removerDobleClick);
        $eventoRemover.disabled = true;
    }

    $eventoRemover.addEventListener("dblclick", removerDobleClick);

    console.groupEnd();
}

/*
//Flujo de Eventos (Burbuja y Captura)
{
    console.group("14 - Flujo de Eventos (Burbuja y Captura)");
    document.body.style.setProperty("color", "#000");

    const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

    function flujoEventos(e) {
        console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
        //stopPropagation
        e.stopPropagation();
    }

    console.log($divsEventos);

    
    $divsEventos.forEach(div => {
        //Burbuja: default = false
        div.addEventListener("click", flujoEventos, false);
        //Captura: true
        //div.addEventListener("click", flujoEventos, true);
        // div.addEventListener("click", flujoEventos, {
        //     capture: false,
        //     once: true,
        // });
    });

    console.groupEnd();
}

//DOM: stopPropagation & preventDefault
{
    console.group("15 - DOM: stopPropagation & preventDefault");

    const $linkEventos = document.querySelector(".eventos-flujo a");

    $linkEventos.addEventListener("click", (e) => {
        alert(`Hola papu.`);
        e.preventDefault();
        e.stopPropagation();
    });

    console.groupEnd();
}
*/

//Delegación de Eventos
{
    console.group("16 - Delegación de Eventos");
    document.body.style.setProperty("color", "#000");

    function flujoEventos2(e) {
        console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
    };

    document.addEventListener("click", (e) => {
        console.log("Click en:", e.target);
        
        if (e.target.matches(".eventos-flujo div")){
            flujoEventos2(e);
        }

        if (e.target.matches(".eventos-flujo a")) {
            alert(`Hola papu.`);
            e.preventDefault();
        }

    });

    console.groupEnd();
}

//BOM: Propiedades y Eventos
{
    console.group("17 - BOM: Propiedades y Eventos");
    document.body.style.setProperty("color", "yellow");

    window.addEventListener("resize", (e) => {
        console.clear();
        console.log("*****Event Resize*****");
        console.log(window.innerWidth);
        console.log(window.innerHeight);
        console.log(window.outerWidth);
        console.log(window.outerHeight);
        console.log(e);
    });

    window.addEventListener("scroll", e => {
        //console.clear();
        console.log("*****Event Scroll*****");
        console.log(window.scrollX);
        console.log(window.scrollY);
        console.log(e);
    });

    window.addEventListener("load", e => {
        //console.clear();
        console.log("*****Event Load*****");
        console.log(window.screenX);
        console.log(window.screenY);
        console.log(e);
        
    });

    document.addEventListener("DOMContentLoaded", e => {
        //console.clear();
        console.log("*****Event DOMContentLoaded*****");
        console.log(window.screenX);
        console.log(window.screenY);
        console.log(e);
    });

    console.groupEnd();
}

//BOM: Métodos
{
    console.group("18 - BOM: Métodos");

    // window.alert("Alerta");
    // window.confirm("Confirmación");
    // window.prompt("Aviso");

    const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

    let ventana;

    $btnAbrir.addEventListener("click", e => {
        ventana = window.open("https://twitter.com/criZorr");
    });
    
    $btnCerrar.addEventListener("click", e => {
        //window.close();
        ventana.close();
    });
    
    $btnImprimir.addEventListener("click", e => {
        window.print();
    });

    console.groupEnd();
}

//BOM: Objetos: URL, Historial y Navegador
{
    console.group("19 - BOM: Objetos: URL, Historial y Navegador");

    console.log("*****Objeto URL (location)******");
    console.log(location);
    console.log(location.origin);
    console.log(location.protocol);
    console.log(location.host);
    console.log(location.hostname);
    console.log(location.port);
    console.log(location.href);
    console.log(location.hash);
    console.log(location.search);
    console.log(location.pathname);
    //location.reload();

    console.log("*****Objeto Historial (history)******");

    console.log(history);
    console.log(history.length);
    // history.forward(1);
    // history.go(-3);
    // history.back(2);

    console.log("*****Objeto Navegador (navigator)******");
    console.log(navigator);
    console.log(navigator.connection);
    console.log(navigator.geolocation);
    console.log(navigator.mediaDevices);
    console.log(navigator.mimeTypes);
    console.log(navigator.onLine);
    console.log(navigator.serviceWorker);
    console.log(navigator.storage);
    console.log(navigator.usb);
    console.log(navigator.userAgent);
    
    console.groupEnd();
}