//parametros por defecto antes es6
function defecto(name, age, country){
    let name = name || "David";
    let age = age || 19;
    let country = country || "PE";
    console.log(name, age, country);
};

// con es6 

function es6(name = "David", age = 19, country = "PE"){
    console.log(name,age, country);
};

es6();
es6("israel",20,"MX");

//concatenacion de variables 

let hola = "Hello";
let mundo = "World";
let frase = hola + " " + mundo;
console.log(frase);

//con es6 se usan las temples

let frase1 = `${hola} ${mundo}`;
console.log(frase1);

//salto de linea 

let lorem = "lorem nose que escribir \n" + "jajaj otra linea";
console.log(lorem);

//con es6 se usan las template

let lorem2 = `otra frase que nose 
que como empezar`;
console.log(lorem2);

//extraer elemento de un objeto 

let persona ={
    "nombre": "david",
    "edad": 19,
    "pais": "peru"
};

console.log(persona.nombre, persona.edad);

//con es6 podemos desestructurarlo 

let {nombre,pais} = persona;
console.log(nombre,pais);

// con es6 se unen arreglos con el operador de propagacion

let team1 = ["juan", "jesus", "oscar"];
let team2 = ["abigail", "sara", "maria"];
let educacion = ["david", ...team1,...team2];
console.log(educacion);

//asugnacion de variables convar era global no era de bloque

{
    var variable = "hola"
}

//con es6 let si era de bloque 

{
    let mundo = "mundo"
    console.log(variable); // scope global
    console.log(mundo); // scope local
}

// es6 añadio const para variables que no van a cambiar

const a = "a";
a = "b"; // esto generaria un error
console.log(a);

//creacion de un objecto

let nombre = "david";
let edad = 19;

obj = {nombre: nombre, edad: edad};

// con es6 

obj2 = {nombre , edad};
console.log(obj2);

//arrow function antes de es6  

const names = [
    {name: "oscar", age: 34},
    {name: "david", age: 19}
]

let nombres = names.map(function(item) {
    console.log(item.name);
});

//con es6 se usan asi        

let nombresItem = names.map(item => console.log(item.name));
//otras formas en como se encuentran 

const listofname = (names,age) => {
    //codigo
}

const listofname1 = age => {
    //codigo
}


const square = num => num * num ;

//promesas en es6 

const holapromesa = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve("hey");
        }else {
            reject ("upss!");
        }
    });
}

holapromesa ()
.then(response => console.log(response))
.catch(error => console.log(error))

// con es6 se implemento poo 

class persona{
    constructor(){
        this.nombre
        this.edad
    }

    saludar(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        return `hola ${nombre}`
    }
}

const person = new persona();
console.log(person.saludar("david",19));

// importacion de modulos con es6 

/* import {hello} from "./module";
console.log(hello());
 */
//otra forma de importar

const epico = require("./module");
console.log(epico());

//generadores

function* helloworld() {
    if (true){
        yield "hola, ";
    }
    if (true){
        yield "mundo.";
    }
}

const generador = helloworld();
console.log(generador.next().value);
console.log(generador.next().value);