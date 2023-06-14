export const PI = Math.PI;

export let usuario = "Christopher";
let password = "qwerty";
//export default password - así sí vale

//Solo se puede un default, solo con globales - funciones y clases
export default function saludar(){
    console.log("Hola Módulos +ES6");
}

export class Saludar{
    constructor(){
        console.log("Hola Clases +ES6");
    }
}