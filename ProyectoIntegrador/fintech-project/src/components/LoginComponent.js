// src/components/LoginComponent.js
import RegistroComponent from './RegistroComponent.js';
import CuentaComponent from './CuentaComponent.js';

class LoginComponent {
    constructor(parent, model, router) {
      this.parent = parent;
      this.model = model;
      this.router = router;
    }
  
    handleRegistrarse() {
      this.router.navigateTo(RegistroComponent);
    }
  
    handleIniciarSesion() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      if (this.model.login(username, password)) {
        this.router.navigateTo(CuentaComponent);
      } else {
        alert('Credenciales inválidas');
      }
    }
  
    render() {
      this.parent.innerHTML = `
        <div>
          <h2>Login</h2>
          <input id="username" type="text" placeholder="Usuario">
          <input id="password" type="password" placeholder="Contraseña">
          <button id="login-btn">Iniciar Sesión</button>
          <button id="register-btn">Registrarse</button>
        </div>
      `;
      document.getElementById('login-btn').onclick = () => this.handleIniciarSesion();
      document.getElementById('register-btn').onclick = () => this.handleRegistrarse();
    }
  }
  
  export default LoginComponent;