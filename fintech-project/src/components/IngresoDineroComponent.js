// src/components/IngresoDineroComponent.js
import CuentaComponent from './CuentaComponent.js';

class IngresoDineroComponent {
  constructor(parent, model, router) {
    this.parent = parent;
    this.model = model;
    this.router = router;
  }

  handleVolver() {
    this.router.navigateTo(CuentaComponent);
  }

  handleIngresarDinero() {
    const monto = parseFloat(document.getElementById('monto').value);
    const motivo = document.getElementById('motivo').value;

    try {
      // Obtiene codigoCuenta del modelo
      const codigoCuenta = this.model.cuentaActual;

      // Llama al método depositar
      this.model.depositar(codigoCuenta, monto, motivo);

      alert('Ingreso realizado con éxito');
      this.handleVolver();
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    this.parent.innerHTML = `
        <div>
          <h2>Ingresar Dinero</h2>
          <input id="monto" type="number" placeholder="Monto">
          <input id="motivo" type="text" placeholder="Motivo">
          <button id="ingresar-btn">Ingresar</button>
          <button id="volver-btn">Volver</button>
        </div>
      `;
    document.getElementById('ingresar-btn').onclick = () => this.handleIngresarDinero();
    document.getElementById('volver-btn').onclick = () => this.handleVolver();
  }
}

export default IngresoDineroComponent;