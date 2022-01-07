//Vamos a poner 2 funciones. Una para eliminar todas las filas, otra para agregar
function eliminarFilas(){
    var eliminar = document.getElementById('cuerpoTabla');
    var cantidadFilas = eliminar.getElementsByTagName('tr');
    var cantidad = cantidadFilas.length;

    alert('Cantidad de filas: ' + cantidad);
}