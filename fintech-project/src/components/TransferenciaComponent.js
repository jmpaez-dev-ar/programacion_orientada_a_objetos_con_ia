// src/components/TransferenciaComponent.js
import CuentaComponent from './CuentaComponent.js';

class TransferenciaComponent {
  constructor(parent, model, router) {
    this.parent = parent;
    this.model = model;
    this.router = router;
  }

  handleVolver() {
    this.router.navigateTo(CuentaComponent);
  }

  handleTransferir() {
    const destinatario = document.getElementById('destinatario').value;
    const monto = parseFloat(document.getElementById('monto').value);

    try {
      // Obtén el código de cuenta origen desde el modelo
      const codigoCuentaOrigen = this.model.cuentaActual;

      // Encuentra el código de cuenta del destinatario
      let cuentaDestino = null;
      for (const cuenta of this.model.cuentas.values()) {
        if (cuenta.cliente.email === destinatario) {
          cuentaDestino = cuenta;
          break;
        }
      }

      if (!cuentaDestino) {
        throw new Error('Cuenta del destinatario no encontrada');
      }

      const codigoCuentaDestino = cuentaDestino.codigo;

      // Realiza la transferencia
      this.model.transferir(codigoCuentaOrigen, codigoCuentaDestino, monto, 'Transferencia');

      alert('Transferencia realizada con éxito');
      this.handleVolver();
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    this.parent.innerHTML = `
      <div>
        <h2>Transferir Dinero</h2>
        <input id="destinatario" type="text" placeholder="Correo del destinatario">
        <input id="monto" type="number" placeholder="Monto">
        <button id="transferir-btn">Transferir</button>
        <button id="volver-btn">Volver</button>
      </div>
    `;
    document.getElementById('transferir-btn').onclick = () => this.handleTransferir();
    document.getElementById('volver-btn').onclick = () => this.handleVolver();
  }
}

export default TransferenciaComponent;