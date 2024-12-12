// src/models/Cliente.js
class Cliente {
    #password;
  
    constructor(id, nombre, apellido, dni, email, password) {
      if (!this.validarNombre(nombre)) throw new Error('Nombre inválido');
      if (!this.validarNombre(apellido)) throw new Error('Apellido inválido');
      if (!this.validarDNI(dni)) throw new Error('DNI inválido');
      if (!this.validarEmail(email)) throw new Error('Email inválido');
      if (!this.validarPassword(password)) throw new Error('Contraseña inválida');
  
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.dni = dni;
      this.email = email;
      this.#password = password;
    }
  
    // Validaciones
    validarNombre(nombre) {
      return typeof nombre === 'string' && nombre.trim().length > 0;
    }
  
    validarDNI(dni) {
      return typeof dni === 'string' && /^[0-9]{7,8}$/.test(dni);
    }
  
    validarEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;      
      return emailRegex.test(email);
    }
  
    validarPassword(password) {
      return typeof password === 'string' && password.length >= 6;
    }
  
    // Getters
    getNombre() {
      return this.nombre;
    }
  
    getApellido() {
      return this.apellido;
    }
  
    getDNI() {
      return this.dni;
    }
  
    getEmail() {
      return this.email;
    }
  
    verificarPassword(password) {
      return this.#password === password;
    }
  
    // Setters
    setNombre(nombre) {
      if (!this.validarNombre(nombre)) throw new Error('Nombre inválido');
      this.nombre = nombre;
    }
  
    setApellido(apellido) {
      if (!this.validarNombre(apellido)) throw new Error('Apellido inválido');
      this.apellido = apellido;
    }
  
    setEmail(email) {
      if (!this.validarEmail(email)) throw new Error('Email inválido');
      this.email = email;
    }
  
    cambiarPassword(nuevoPassword, confirmarPassword) {
      if (nuevoPassword !== confirmarPassword) throw new Error('Las contraseñas no coinciden');
      if (!this.validarPassword(nuevoPassword)) throw new Error('Contraseña inválida');
      this.#password = nuevoPassword;
    }
  
    // Métodos adicionales
    obtenerNombreCompleto() {
      return `${this.nombre} ${this.apellido}`;
    }
  }
  
  export default Cliente;
  