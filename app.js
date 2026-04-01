function agregarIngreso() {
  const nombre = document.getElementById("ingresoNombre").value;
  const monto = parseFloat(document.getElementById("ingresoMonto").value);

  ingresos.push({ nombre, monto });
  render();
}

function agregarGasto() {
  const nombre = document.getElementById("gastoNombre").value;
  const monto = parseFloat(document.getElementById("gastoMonto").value);

  gastos.push({ nombre, monto });
  render();
}

function agregarDeuda() {
  const nombre = document.getElementById("deudaNombre").value;
  const monto = parseFloat(document.getElementById("deudaMonto").value);
  const interes = parseFloat(document.getElementById("deudaInteres").value);

  deudas.push({ nombre, monto, interes });
  render();
}

function render() {
  document.getElementById("listaIngresos").innerHTML =
    ingresos.map(i => `<li>${i.nombre}: $${i.monto}</li>`).join("");

  document.getElementById("listaGastos").innerHTML =
    gastos.map(g => `<li>${g.nombre}: $${g.monto}</li>`).join("");

  document.getElementById("listaDeudas").innerHTML =
    deudas.map(d => `<li>${d.nombre}: $${d.monto} (${d.interes}%)</li>`).join("");

  const totalIng = ingresos.reduce((a, b) => a + b.monto, 0);
  const totalGas = gastos.reduce((a, b) => a + b.monto, 0);

  document.getElementById("totalIngresos").innerText = "Ingresos: $" + totalIng;
  document.getElementById("totalGastos").innerText = "Gastos: $" + totalGas;
  document.getElementById("disponible").innerText = "Disponible: $" + (totalIng - totalGas);
}

function ordenarDeudas() {
  const ordenadas = [...deudas].sort((a, b) => b.interes - a.interes);

  document.getElementById("prioridadDeudas").innerHTML =
    ordenadas.map(d => `<li>${d.nombre} - ${d.interes}%</li>`).join("");
}
