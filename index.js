class Producto {
    constructor(nombre, precio, stock, cantidad) {
        this.cantidad = cantidad;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
        get_datos(){
            console.log("<----------------------->")
            console.log("Nombre:  ", this.nombre);
            console.loh("Stock:  ",this.stock);
            console.log("El valor del producto es: ", this.precio);
            console.log("");
        }

        get_stock(){

        }


    }



function buscar_producto(producto) {

    return producto.nombre == compra_usuario
}


/* ALTA PRODUCTOS */

let lista_productos = [];

for (let i = 0; i < 2; i++) {
    let nombre = prompt("Ingrese el nombre del producto");
    let precio = prompt("Ingrese el precio del producto");
    let stock = prompt("Ingrese el stock del producto");
    let producto = new Producto(nombre, precio, stock);

    lista_productos.push(producto);

}


console.log(lista_productos)

/*SIMULO VISTA DE PRODUCTOS*/

for (let producto of lista_productos) {

    producto.get_datos();
}


/*SIMULO UNA COMPRA*/

let compra_usuario = prompt("Ingrese el nombre del producto que desea comprar");
let compra_usuario1 = prompt("Ingrese la cantidad de productos que desea comprar");
let resultado_find = lista_productos.find(buscar_producto)

console.log(resultado_find);