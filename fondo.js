var contador = 0;
var colores = ["yellow", "blue", "#e6ffe6"]; 

function cambiarColorFondo() {
  var body = document.body;
  var color = colores[contador % colores.length];
  body.style.backgroundColor = color;
  contador++;
}
