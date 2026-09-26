// Función flecha (arrow function) encargada de procesar la cotización del pedido
const cotizarPedido = () => {
  // 1. Lectura de valores ingresados en los campos de formulario del DOM
  const precioInput = document.getElementById("precio").value;
  const cantidadInput = document.getElementById("cantidad").value;
  const envioInput = document.getElementById("envio").value;
  const resultado = document.getElementById("resultado");

  // 2. Conversión explícita de texto (string) a tipo numérico con Number()
  const precio = Number(precioInput);
  const cantidad = Number(cantidadInput);
  const envio = Number(envioInput);

  // 3. Validación de datos:
  // - Revisa si algún campo viene vacío (!precioInput o !cantidadInput)
  // - Comprueba que sean números válidos con Number.isNaN()
  // - Exige que el precio y la cantidad sean estrictamente mayores a cero
  if (!precioInput || !cantidadInput || Number.isNaN(precio) || Number.isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
    resultado.innerHTML = "Ingrese un precio y una cantidad mayores que cero.";
    return; // Corta la ejecución de la función si la validación falla
  }

  // 4. Operaciones aritméticas solicitadas en el enunciado
  const subtotal = precio * cantidad; // subtotal = precio * cantidad
  const total = subtotal + envio;      // total = subtotal + costo de envío

  // 5. Presentación del desglose en el DOM usando plantillas literales (template strings)
  // toFixed(2) garantiza exactamente dos decimales en cada importe
  resultado.innerHTML = `
    Subtotal: S/ ${subtotal.toFixed(2)}<br>
    Costo de envío: S/ ${envio.toFixed(2)}<br>
    <strong>Total a pagar: S/ ${total.toFixed(2)}</strong>
  `;
};

// 6. Registro del evento click sobre el botón «Cotizar pedido»
const btnCotizar = document.getElementById("btnCotizar");
btnCotizar.addEventListener("click", cotizarPedido);