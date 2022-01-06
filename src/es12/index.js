const frase = "hola mundo con python, python es genial";
const reemplazar = frase.replace("python","js");
console.log(reemplazar);

const reemplazar2 = frase.replaceAll("python","js");
console.log(reemplazar2);


//metodos privados              
class mensaje {
    #ver (val){
        console.log(val);
    };
}

const men = new mensaje();
men.ver("hola");

//muestra el primer valor que sea resolvido e ignora el resto

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));