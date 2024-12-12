// src/components/RegistroComponent.js
import LoginComponent from './LoginComponent.js';

class RegistroComponent {
  constructor(parent, model, router) {
    this.parent = parent;
    this.model = model;
    this.router = router;
  }

  handleRegistro() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    try {
      // Crear cliente
      const cliente = this.model.crearCliente(nombre, apellido, dni, email, password, confirmPassword);

      // Crear cuenta asociada al cliente con un saldo inicial
      const saldoInicial = 0; // Puedes ajustar este valor según el caso
      this.model.crearCuenta(cliente.id, saldoInicial);
      alert('Usuario y cuenta creados con éxito.');

      this.router.navigateTo(LoginComponent);
    } catch (error) {
      alert(error.message);
    }
  }

  handleVolverAlLogin() {
    this.router.navigateTo(LoginComponent);
  }

  render() {
    this.parent.innerHTML = `
        <div>
          <h2>Registro</h2>
          <input id="nombre" type="text" placeholder="Nombre">
          <input id="apellido" type="text" placeholder="Apellido">
          <input id="dni" type="text" placeholder="DNI">
          <input id="email" type="email" placeholder="Correo Electrónico">
          <input id="password" type="password" placeholder="Contraseña">
          <input id="confirm-password" type="password" placeholder="Confirmar Contraseña">
          <button id="registro-btn">Registrarse</button>
          <button id="volver-btn">Volver</button>
        </div>
      `;
    document.getElementById('registro-btn').onclick = () => this.handleRegistro();
    document.getElementById('volver-btn').onclick = () => this.handleVolverAlLogin();
  }
}

export default RegistroComponent;