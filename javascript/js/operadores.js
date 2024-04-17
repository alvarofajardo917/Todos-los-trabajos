/*
let a = 10;
let b = 5;
a+=1;
console.log(a);
a=a+b;
console.log("a+b= :" +a);
a=11;
a+=b;
console.log("a+=b :" +a);
a++;
console.log("a++ :" +a);
a--;
console.log("a-- :" +a);

if((a%2)==0)
{
    console.log("a es PAR");
}
else{
    console.log("a es IMPAR");
    console.log(a+b+Number("5"));
}
*/
//GENERA UN ARRAY DE 10 NOMBRE:"JUAN"  NOTA: RANDOMICO ENTRE 20-100.
//MOSTRAR LA NOTA MAYOR , MENOR Y PROMEDIO
let nombre = [
    { nombre: "juan", nota: 0 },
    { nombre: "marcos", nota: 0 },
    { nombre: "kevin", nota: 0 },
    { nombre: "saul", nota: 0 },
    { nombre: "pablo", nota: 0 },
    { nombre: "tomas", nota: 0 },
    { nombre: "michel", nota: 0 },
    { nombre: "oscar", nota: 0 },
    { nombre: "mateo", nota: 0 },
    { nombre: "daniela", nota: 0 }
];

console.log(nombre);

// Actualizar las notas con valores aleatorios
for (let i = 0; i < nombre.length; i++) {
    nombre[i].nota = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
}

console.log(nombre);

// Calcular la nota mayor, menor y el promedio
let sumaNotas = 0;
let notaMayor = nombre[0].nota;
let notaMenor = nombre[0].nota;

for (let i = 0; i < nombre.length; i++) {
    sumaNotas += nombre[i].nota;
    if (nombre[i].nota > notaMayor) {
        notaMayor = nombre[i].nota;
    }
    if (nombre[i].nota < notaMenor) {
        notaMenor = nombre[i].nota;
    }
}

let promedio = sumaNotas / nombre.length;

console.log("Nota mayor:", notaMayor);
console.log("Nota menor:", notaMenor);
console.log("Promedio:", promedio);
