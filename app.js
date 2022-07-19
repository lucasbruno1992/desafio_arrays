let arrayCarrito = []
let arrayProductos = [ //Creo mi array de objetos de productos
{
id:1,
nombre: "te",
precio:100,
categoria: "almacen"
},
{
id:2,
nombre: "yerba",
precio:200,
categoria: "almacen"
},
{
id:3,
nombre: "aceite",
precio:300,
categoria: "almacen"
}
]
let producto = ""
let nuevaCompra = false

//Declaro mi objeto a través de una clase
class Producto{
	constructor(id, nombre, precio, categoria){
	this.id = id
	this.nombre = nombre
	this.precio=precio
	this.categoria = categoria
}}

do {
    producto = prompt(`¿Que desea comprar: 
TE, 
YERBA, 
ACEITE?`) //Se le pide el producto al usuario.
    seleccionarProducto() //Es una funcion que va a cargar el producto al carrito
    nuevaCompra = confirm("¿Quieres realizar otra compra?") //Se le pregunta al usuario si quiere seguir comprando
} while (nuevaCompra) //Se va a corta el DO si nuevaCompra es false


//Se mete el producto ingresado a la funcion
function seleccionarProducto(){
    switch (producto.toLocaleLowerCase()) {
        case "te":
            let te = arrayProductos[0]; // Guarda en una variable la primera posicion del arrayProductos
            arrayCarrito.push(te); // Guardo en el arrayCarrito la variable anteriormente asignada
            break;
    
        case "yerba":
            let yerba = arrayProductos[1];
            arrayCarrito.push(yerba);
            break;
    
        case "aceite":
            let aceite = arrayProductos[2];
            arrayCarrito.push(aceite);
            break;

        default:
            alert("No ingresó ningun producto");
            valor = 0;
            producto = " ";
            break;
    }
}

const calcularCompra = arrayCarrito.reduce((acc, producto) =>acc + producto.precio, 0); // Utilizo el metodo reduce() y se lo asigno a una variable

//Utilizo desafio complementario modificado con las opciones de pago en efectivo o con tarjeta

let total = ""
let cantidadDeCuotas = ""
let medioDePago = prompt(`Ingrese medio de pago: 
EFECTIVO;
CON TARJETA;`)
let listado = ""

switch (medioDePago.toLowerCase()) {
    case "efectivo":
        let cuponDeDescuento = (prompt(`Ingrese cupon de descuento: `))
        if(cuponDeDescuento.toLowerCase() !== "promo1"){
            total = calcularCompra //El valor guardado en calcularCompra se lo asigno a total
            alert(`Total de su compra es: ${total}`);
            break;
        } else{
            total = calcularCompra - 100; //El valor guardado en calcularCompra se lo resto a 100 y se lo asigno a total
            alert(`Total de su compra es: ${total}`);
            break;
        }
    case "con tarjeta":
        for (let i = 1; i<=4; i++){
            total= calcularCompra/(i*3); 
            listado += `En ${i*3} cuotas de $${total} cada una` + "\n";
        }
        alert(listado);
        alert (cuotas(parseInt(prompt(`Ingrese la cantidad de cuotas:
3 cuotas;
6 cuotas;
9 cuotas;
12 cuotas;`))));
break;
    default: alert(`No ingreso metodo de pago`);
    alert(medioDePago);
        break;
}

function cuotas(cantidadDeCuotas) {
    switch (cantidadDeCuotas) {
        case 3:
            alert(`En ${cantidadDeCuotas} cuotas el valor de cada cuota es de: $` + calcularCompra / 3);
            break;
        case 6:
            alert(`En ${cantidadDeCuotas} cuotas el valor de cada cuota es de: $` +  calcularCompra / 6);
            break;
        case 9:
            alert(`En ${cantidadDeCuotas} cuotas el valor de cada cuota es de: $` + calcularCompra / 9);
            break;
        case 12:
            
        alert(`En ${cantidadDeCuotas} cuotas el valor de cada cuota es de: $` + calcularCompra / 12);
            break;
        default:
            alert(`No ingresó cantidad de cuotas validados.`);
            alert (cuotas(parseInt(prompt(`Ingrese la cantidad de cuotas:
    3 cuotas;
    6 cuotas;
    9 cuotas;
    12 cuotas;`))));
    break;
    }
}
