function calcularFecha() {
    var fechaInput = document.getElementById("fechaInput").value;
  
    if (fechaInput) {
      // Convertir la fecha de entrada a un objeto Date
      var fechaInicial = new Date(fechaInput + "-01");
  
      // Calcular 10 meses antes
      var fechaIdeal = new Date(fechaInicial);
      fechaIdeal.setMonth(fechaInicial.getMonth() - 10);
  
      // Formatear la fecha de aplicación ideal
      var fechaAplicacionIdeal = fechaIdeal.getDate() + "/" + (fechaIdeal.getMonth() + 1) + "/" + fechaIdeal.getFullYear();
  
      // Mostrar el resultado de la aplicación ideal en el cuadro verde petróleo
      var resultado = document.getElementById("resultado");
      resultado.innerHTML = "<div class='resultado-ideal'>Fecha de aplicación ideal: <strong>" + fechaAplicacionIdeal + "</strong></div>";
  
      // Calcular 215 días antes
      var fechaEmergencia = new Date(fechaInicial);
      fechaEmergencia.setDate(fechaEmergencia.getDate() - 215);
  
      // Formatear la fecha de aplicación de emergencia
      var fechaAplicacionEmergencia = fechaEmergencia.getDate() + "/" + (fechaEmergencia.getMonth() + 1) + "/" + fechaEmergencia.getFullYear();
  
      // Mostrar el resultado de la aplicación de emergencia en el cuadro rojo escarlata
      var aplicacionEmergencia = document.getElementById("aplicacionEmergencia");
      aplicacionEmergencia.innerHTML = "<div class='resultado-emergencia'>Fecha de aplicación de emergencia: <strong>" + fechaAplicacionEmergencia + "</strong></div>";
    } else {
      alert("Por favor, ingrese una fecha válida.");
    }
  }
