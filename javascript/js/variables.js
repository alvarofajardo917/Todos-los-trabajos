/*const INTERVALO = 10;

console.log("Intervalo sera de " + INTERVALO + "minutos");
//INTERVALO =15; // NO se permite por ser constante
*/
/*
var intervalo = 15;
console.log("Intervalo sera de " + intervalo + "minutos con una variable");
intervalo = 20;
console.log("Intervalo  de " + intervalo + " minutos con una variable modificada");
*/

// let varb = true; //booleano
// let varn = 3.141592; //Numerico
// let vars = "Texto String"; // cadena
// let var1;//Indefinido

// console.log("Para la variable vab" +varb + "con el tipo de dato " + typeof varb);
// console.log("Para la variable varn" +varn + "con el tipo de dato " + typeof varn);
// console.log("Para la variable vars" +vars + "con el tipo de dato " + typeof vars);
// console.log("Para la variable var1" +var1 + "con el tipo de dato " + typeof var1);

// var1 = vars;
// console.log("Para la variable var1" +var1 + "con el tipo de dato " + typeof var1);

//Realizar la siguientes conversines a implicitas 
// Declaración de variables y asignación de valores
let var1 = 15.25; // Variable var1 con valor numérico
let var2 = 0;     // Variable var2 con valor numérico
let var3 = true;  // Variable var3 con valor booleano
let var4 = "100"; // Variable var4 con valor string
let varx;         // Variable varx declarada pero sin valor asignado

// Asignación de valores a varx y salida de información sobre cada variable
varx = var1;
console.log("Para la variable varx " + varx + " con el tipo de dato " + typeof varx);

varx = var2;
console.log("Para la variable varx " + varx + " con el tipo de dato " + typeof varx);

varx = var3;
console.log("Para la variable varx " + varx + " con el tipo de dato " + typeof varx);

varx = var4;
console.log("Para la variable varx " + varx + " con el tipo de dato " + typeof varx);

// La siguiente línea no altera el valor de varx ya que se asigna a sí misma
varx = varx;
console.log("Para la variable varx " + varx + " con el tipo de dato " + typeof varx);


//conversiones Explicitas 


// Conversión explícita de var1 a string
varx = String(var1);
console.log("Para la variable varx: " + varx + " con el tipo de dato " + typeof varx);

// Conversión explícita de var2 a string
varx = String(var2);
console.log("Para la variable varx: " + varx + " con el tipo de dato " + typeof varx);

// Conversión explícita de var3 a string
varx = String(var3);
console.log("Para la variable varx: " + varx + " con el tipo de dato " + typeof varx);

// Conversión explícita de lvar4 a número
varx = Number(var4);
console.log("Para la variable varx: " + varx + " con el tipo de dato " + typeof varx);

// Conversión explícita de varx a string (no cambia el tipo de dato)
varx = String(varx);
console.log("Para la variable varx: " + varx + " con el tipo de dato " + typeof varx);

