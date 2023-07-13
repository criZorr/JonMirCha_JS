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