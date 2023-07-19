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