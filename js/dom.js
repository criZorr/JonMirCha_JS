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