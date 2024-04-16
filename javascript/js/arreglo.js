//Compras a un supermercado
/*let carrito = [
    "leche" ,1,
    "carne",2,
    "papa",3,
    "fideos",1
];

console.log("Item :" + carrito[0]);
console.log("Cantidad :" + carrito[1]);
console.log("Item" + carrito[2]);
console.log("Cantidad :" + carrito[3]);
console.log("Item :" + carrito[4]);
console.log("Cantidad :" + carrito[5]);
console.log("Item :" + carrito[6]);
console.log("Cantidad :" + carrito[7]);

console.log("IMPRESION COMPLETA");
console.log(carrito);

carrito.push("manzanas", 4);
console.log(carrito);

*/

// let item = {nombre:'Leche', cantidad:1}
// console.log("Item: " + item.nombre);
// console.log("Cantidad: " + item.cantidad);

let item =[{nombre:'Leche', cantidad:2 , precio:7.5},
                {nombre:'carne', cantidad:2 , precio:13.6},
                {nombre:'fideo', cantidad:2 , precio:6.5},
                {nombre:'papa', cantidad:2 , precio:5}
            ]
//Imprimir con etiquetas
console.log("Item " + item[0].nombre);
console.log("Cantidad " + item[0].cantidad);
console.log("precio " + item[0].precio);
console.log("Total  " + item[0].cantidad * item[0].precio);


console.log("Item " + item[1].nombre);
console.log("Cantidad " + item[1].cantidad);
console.log("precio " + item[1].precio);
console.log("Total  " + item[1].cantidad * item[1].precio);




console.log("Item " + item[2].nombre);
console.log("Cantidad " + item[2].cantidad);
console.log("precio " + item[2].precio);
console.log("Total  " + item[2].cantidad * item[2].precio);



console.log("Item " + item[3].nombre);
console.log("Cantidad " + item[3].cantidad);
console.log("precio " + item[3].precio);
console.log("Total  " + item[3].cantidad * item[3].precio);





//Adicionar un nuevo registro 
 item.push({nombre:"manzanas", cantidad:4 , precio:3});
 console.log("Item " + item[4].nombre);
 console.log("Cantidad " + item[4].cantidad);
 console.log("precio " + item[4].precio);
 console.log("Total  " + item[4].cantidad * item[4].precio);
// console.log(item);