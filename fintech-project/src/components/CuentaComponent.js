// src/components/CuentaComponent.js
import IngresoDineroComponent from './IngresoDineroComponent.js';
import TransferenciaComponent from './TransferenciaComponent.js';
import LoginComponent from './LoginComponent.js';

class CuentaComponent {
  constructor(parent, model, router) {
    this.parent = parent;
    this.model = model;
    this.router = router;
  }

  handleSalir() {
    this.router.navigateTo(LoginComponent);
  }

  handleIngresarDinero() {
    this.router.navigateTo(IngresoDineroComponent);
  }

  handleVerMovimientos() {
    try {
      const movimientos = this.model.obtenerMovimientos(this.model.cuentaActual);
      alert(
        movimientos.length > 0
          ? movimientos.map(m => `${m.tipo}: $${m.monto} (${m.motivo})`).join('\n')
          : 'No hay movimientos registrados.'
      );
    } catch (error) {
      alert(error.message);
    }
  }

  handleTransferir() {
    this.router.navigateTo(TransferenciaComponent);
  }

  render() {
    try {
      const saldo = this.model.consultarSaldo(this.model.cuentaActual);
      this.parent.innerHTML = `
        <div style="text-align: center;">
          <h2>Bienvenido</h2>
          <p style="font-size: 1.5em; color: green;">$${saldo}</p>
          <button id="transferir-btn">Transferir dinero</button>
          <button id="ingresar-btn">Ingresar dinero</button>
          <button id="movimientos-btn">Ver movimientos</button>
          <button id="salir-btn">Salir</button>
        </div>
      `;
      document.getElementById('transferir-btn').onclick = () => this.handleTransferir();
      document.getElementById('ingresar-btn').onclick = () => this.handleIngresarDinero();
      document.getElementById('movimientos-btn').onclick = () => this.handleVerMovimientos();
      document.getElementById('salir-btn').onclick = () => this.handleSalir();
    } catch (error) {
      alert(error.message);
      this.handleSalir(); // Redirige al login en caso de error
    }
  }
}

export default CuentaComponent;
