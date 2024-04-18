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
/*let nombre = [
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
*/
/*
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

// Actualizar las notas con valores aleatorios en el rango de 1 a 10
for (let i = 0; i < nombre.length; i++) {
    nombre[i].nota = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
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

/*
listar las notas
insuficiente: (2,4)
suficiente:(5,6)
bien:(7,8)
notable:9
sobresaliente:10
*/
/*
for (let i = 0; i < nombre.length; i++) {
    let nota = nombre[i].nota;
    let categoria;

    switch (true) {
        case nota < 5:
            categoria = "insuficiente";
            break;
        case nota >= 5 && nota < 7:
            categoria = "suficiente";
            break;
        case nota >= 7 && nota < 9:
            categoria = "bien";
            break;
        case nota === 9:
            categoria = "notable";
            break;
        default:
            categoria = "sobresaliente";
            break;
    }

    console.log(`${nombre[i].nombre}: ${categoria} (${nota})`);
}
*/
/*
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
function genRandomico($max,$min){
    return Math.floor(Math.random() *($max-$min+1));

}

console.log("NUmero ramdon: " + genRandomico(10,2));
function impNotas()
*/

// Array de 20 nombres
// Función para generar un nombre aleatorio
function generarNombre() {
    var nombres = [
      "Juan",
      "María",
      "Pedro",
      "Ana",
      "Luis",
      "Sofía",
      "Carlos",
      "Laura",
      "Miguel",
      "Lucía",
      "Diego",
      "Elena",
      "Andrés",
      "Carmen",
      "José",
      "Isabel",
      "Pablo",
      "Valentina",
      "Fernando",
      "Clara"
    ];
  
    return nombres[Math.floor(Math.random() * nombres.length)];
  }
  
  // Función para generar un apellido aleatorio
  function generarApellido() {
    var apellidos = [
      "García",
      "Martínez",
      "López",
      "González",
      "Rodríguez",
      "Fernández",
      "Pérez",
      "Sánchez",
      "Ramírez",
      "Torres",
      "Flores",
      "Díaz",
      "Hernández",
      "Vásquez",
      "Moreno",
      "Jiménez",
      "Álvarez",
      "Romero",
      "Ruiz",
      "Ortega"
    ];
  
    return apellidos[Math.floor(Math.random() * apellidos.length)];
  }
  
  // Generar un array de 20 nombres aleatorios
  var nombresAleatorios = [];
  for (var i = 0; i < 20; i++) {
    nombresAleatorios.push(generarNombre());
  }
  
  // Generar un array de 20 apellidos aleatorios
  var apellidosAleatorios = [];
  for (var j = 0; j < 20; j++) {
    apellidosAleatorios.push(generarApellido());
  }
  
  // Concatenar nombres y apellidos en el array nombresApellidos
  var nombresApellidosAleatorios = [];
  for (var k = 0; k < 20; k++) {
    nombresApellidosAleatorios.push(nombresAleatorios[k] + " " + apellidosAleatorios[k]);
  }
  
  // Imprimir el array nombresApellidosAleatorios
  console.log("Nombres y apellidos aleatorios:", nombresApellidosAleatorios);
  