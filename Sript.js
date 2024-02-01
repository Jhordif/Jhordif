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
    fechaEmergencia.setDate(fechaEmergencia.getDate() - 229);

    // Formatear la fecha de aplicación de emergencia
    var fechaAplicacionEmergencia = fechaEmergencia.getDate() + "/" + (fechaEmergencia.getMonth() + 1) + "/" + fechaEmergencia.getFullYear();

    // Mostrar el resultado de la aplicación de emergencia en el cuadro rojo escarlata
    var aplicacionEmergencia = document.getElementById("aplicacionEmergencia");
    aplicacionEmergencia.innerHTML = "<div class='resultado-emergencia'>Fecha de aplicación de emergencia: <strong>" + fechaAplicacionEmergencia + "</strong></div>";
  } else {
    alert("Por favor, ingrese una fecha válida.");
  }
}
// ... (código anterior) ...

function calcularFechasAdicionales() {
  var fechaInicio = document.getElementById("fechaInicio").value;

  if (fechaInicio) {
    // Convertir la fecha de entrada a un objeto Date
    var fechaInicial = new Date(fechaInicio);

    // Calcular 7 días después para la revisión documentaria
    var fechaRevision = new Date(fechaInicial);
    fechaRevision.setDate(fechaRevision.getDate() + 7);
    mostrarFecha("Fecha de culminación estimada de la revisión documentaria", fechaRevision);

    // Calcular 90 días después para el procesamiento y respuesta del College/Universidad
    var fechaProcesamiento = new Date(fechaRevision);
    fechaProcesamiento.setDate(fechaProcesamiento.getDate() + 90);
    mostrarFecha("Fecha de culminación estimada del procesamiento y respuesta del College/Universidad", fechaProcesamiento);

    // Calcular 14 días después para el periodo de pago del primer semestre
    var fechaPagoSemestre = new Date(fechaProcesamiento);
    fechaPagoSemestre.setDate(fechaPagoSemestre.getDate() + 14);
    mostrarFecha("Fecha de culminación estimada del periodo de pago del primer semestre", fechaPagoSemestre);

    // Calcular 14 días después para el periodo de preparación documentaria y consultoría migratoria
    var fechaPreparacionDocumentaria = new Date(fechaPagoSemestre);
    fechaPreparacionDocumentaria.setDate(fechaPreparacionDocumentaria.getDate() + 14);
    mostrarFecha("Fecha de culminación estimada del periodo de preparación documentaria y consultoría migratoria", fechaPreparacionDocumentaria);

    // Calcular 90 días después para el periodo de solicitud de VISA y permiso de estudio
    var fechaTramiteVisa = new Date(fechaPreparacionDocumentaria);
    fechaTramiteVisa.setDate(fechaTramiteVisa.getDate() + 90);
    mostrarFecha("Fecha de culminación estimada del periodo de solicitud de VISA y permiso de estudio", fechaTramiteVisa);

    // Calcular 14 días después para el periodo de preparación para el viaje a Canadá
    var fechaPreparacionViaje = new Date(fechaTramiteVisa);
    fechaPreparacionViaje.setDate(fechaPreparacionViaje.getDate() + 14);
    mostrarFecha("Fecha de culminación estimada del periodo de preparación para el viaje a Canadá", fechaPreparacionViaje);
  } else {
    alert("Por favor, ingrese una fecha válida.");
  }
}

function mostrarFecha(rotulo, fecha) {
  var fechasAdicionales = document.getElementById("fechasAdicionales");
  var resultado = document.createElement("div");
  resultado.className = "resultado-adicional";
  resultado.innerHTML = rotulo + ": <strong>" + fecha.toLocaleDateString() + "</strong>";
  fechasAdicionales.appendChild(resultado);
}
