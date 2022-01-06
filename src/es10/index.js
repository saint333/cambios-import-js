let array = [1,2,3,[1,2,3,4,[1,2,3]]];
//es como aplanar el arrays jejej eso entendi
console.log(array.flat(2));


//permite iterar sobre el array y devolver un resultado
let array2 = [1,2,3,4,5,6,7,8,9,10];
console.log(array2.flatMap(item => [item * 2]));

//eliminar espacios a final y al principio
let frase = "     hola      ";
console.log(frase.trimStart());
console.log(frase.trimEnd());

//disponibilidad de no usar error en catch
try {

}catch{
    error
}

//construir un objecto apartir de un array
let entries = [["name","david"],["edad",19]];
console.log(Object.fromEntries(entries));

//aceder a la descripcion 
let mysymbl = `hola mundo`;
let symbl = Symbol(mysymbl);
console.log(symbl.description);