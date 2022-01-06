const obj = {
    name: "david", 
    age: 19, 
    country: "Peru"
};

//podemos desestructurar un objeto y extraer lo que queremos

let {country, ...resto} = obj;
console.log(resto);

const obj2 = {
    name: "david", 
    age: 19
};

const obj3 = {
    ...obj2,
    country: "Peru"
}

console.log(obj3);

const hola = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("hola"), 3000)
            : reject(new Error("error"))
    });
};

hola()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log("finally"))

const regexdata = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexdata.exec("2002-09-15");
const anio = match[1];
const mes = match[2];
const dia = match[3];
console.log(anio, mes, dia);

