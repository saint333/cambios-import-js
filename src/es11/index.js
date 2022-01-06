const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hola();
});

//trabajar con numeros grandes

const big = 1234567891023978n;
const big2 = BigInt(1234567891023978);
console.log(big);
console.log(big2);

//trabajar con las promesas y saber el estado de cada una ellas sin importar la condicion

const promise = new Promise((resolve, reject) => reject("reject"));
const promise1 = new Promise((resolve, reject) => resolve("resolve"));
const promise2 = new Promise((resolve, reject) => resolve("resolve2"));

Promise.allSettled([promise, promise1, promise2])
    .then(response => console.log(response))

//global this 
console.log(globalThis);

//preguntar si es null o undefined
const saludo = null ?? "palabra por defecto";
console.log(saludo);

//saber si una propiedad existe o no 

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log("email");
}else{
    console.log("fallo");
}