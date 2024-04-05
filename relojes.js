function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
  
    const relojDigital = document.getElementById('relojDigital');
    relojDigital.textContent = `${horas}:${minutos}:${segundos}`;
  
    const manecillaHoras = document.getElementById('manecillaHoras');
    const manecillaMinutos = document.getElementById('manecillaMinutos');
    const manecillaSegundos = document.getElementById('manecillaSegundos');
  
    const gradosHoras = (360 / 12) * (horas % 12) + (30 / 60) * minutos;
    const gradosMinutos = (360 / 60) * minutos + (6 / 60) * segundos;
    const gradosSegundos = (360 / 60) * segundos;
  
    manecillaHoras.style.transform = `rotate(${gradosHoras}deg)`;
    manecillaMinutos.style.transform = `rotate(${gradosMinutos}deg)`;
    manecillaSegundos.style.transform = `rotate(${gradosSegundos}deg)`;
  }
  
  setInterval(actualizarReloj, 1000);
  actualizarReloj();
  