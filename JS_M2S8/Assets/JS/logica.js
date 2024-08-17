//función constructora
function Persona(nombre, dni, clave, cuenta) {
    this.nombre = nombre;
    this.dni = dni;
    this.clave = clave;
    this.cuenta = cuenta;
}

//Usuario podrá ingresar al menú
var persona1 = new Persona("Alan Brito", "123456", 1234, 200000);
var persona2 = new Persona("María Juana", "aaaaaa", 5678, 1000);
var persona3 = new Persona("Pedro Machuca", "zzzzzz", 9009, 1000500);
var persona4 = new Persona("Elisa Paio", "iiiiii", 1412, 10500);

//lista de objetos
var miLista = [persona1, persona2, persona3, persona4];

alert("Bienvenido a Banca en Línea");
var dni = prompt("Ingrese su identificador");
var clave = parseInt(prompt("Ingrese su clave"));

alert("Procesando...")

var boolean = false;
for (let i = 0; i < miLista.length; i++) {
    if (miLista[i].dni == dni && miLista[i].clave == clave) {
        boolean = true;
    } else {
        boolean = false;
    }

    if (boolean == true) {
        alert("Bienvenido " + miLista[i].nombre);
        // Aquí puedes llamar a tu función `menu(miLista[i]);`
        break;
    }

}

if (boolean == false) {
    alert("usuario incorrecto");
}

//MENU
function menu(usuario) {
    do {
        var opcion = parseInt(prompt("Elige tu opción: \n 1.- Ver saldo \n 2.- Realizar giro \n 3.- Depositar \n 4.- Salir"));

        switch (opcion) {
            case 1:
                alert("Su saldo actual es: " + usuario.cuenta);
                break;
            case 2:
                var giro = parseInt(prompt("Su saldo actual es: " + usuario.cuenta + " \nIngrese el monto que desea girar"));

                if (giro > usuario.cuenta) {
                    alert("No se puede realizar la operación solicitada. Excede el saldo");

                } else {
                    var nuevoSaldo = usuario.cuenta - giro;

                    usuario.cuenta = nuevoSaldo;

                    alert("Giro realizado. Su nuevo saldo es " + usuario.cuenta);
                }

                break;
            case 3:
                var deposito = parseInt(prompt("Su saldo actual es: " + usuario.cuenta + " \nIngrese el monto que desea depositar"));


                usuario.cuenta = usuario.cuenta + deposito;

                alert("Deposito realizado. Su nuevo saldo es " + usuario.cuenta);



                break;
            case 4:
                alert("Gracias por preferirnos");
                exits();

                break;

            default:

                alert("Selección erronea")
                break;
        }

    } while (opcion != 4);
}



