function mostrarHora() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
  
   
    if (horas < 10) {
      horas = "0" + horas;
    }
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    if (segundos < 10) {
      segundos = "0" + segundos;
    }
  
 
    var reloj = document.getElementById("reloj");
  
   
    reloj.innerHTML = horas + ":" + minutos + ":" + segundos;
  }
  
  setInterval(mostrarHora, 1000);
  