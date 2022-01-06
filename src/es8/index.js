const data = {
    front : "david",
    back : "israel",
    desing: "elias"
}
//devuelve una matrix de arreglos
const entries = Object.entries(data);
console.log(entries);
//con eso podemos usar length
console.log(entries.length);

const data = {
    front : "david",
    back : "israel",
    desing: "elias"
}
//devuelve una areglo con los valores de un objeto 
const value = Object.values(value);
console.log(value);

//async await

const world = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("hola"), 3000)
            : reject(new Error("test error"))
    })
};

const helloasync = async () => {
    const hola = await world();
    console.log(hola);
};

helloasync();

const otrafunction = async () => {
    try {
        const hello = await world();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

otrafunction();