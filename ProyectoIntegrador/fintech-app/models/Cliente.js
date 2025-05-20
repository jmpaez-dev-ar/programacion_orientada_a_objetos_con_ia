export class Cliente {
  // Atributos privados
  #nombre;
  #apellido;
  #dni;
  #email;
  #password;

  constructor(nombre, apellido, dni, email, password) {
    this.nombre = nombre ;
    this.apellido = apellido;
    this.dni = dni;
    this.email = email;
    this.password = password;
  }

  // Getter y Setter: nombre
  get nombre() {
    return this.#nombre;
  }

  set nombre(valor) {
    if (typeof valor === "string" && valor.trim().length >= 2) {
      this.#nombre = valor.trim();
    } else {
      throw new Error("El nombre debe tener al menos 2 caracteres.");
    }
  }

  // Getter y Setter: apellido
  get apellido() {
    return this.#apellido;
  }

  set apellido(valor) {
    if (typeof valor === "string" && valor.trim().length >= 2) {
      this.#apellido = valor.trim();
    } else {
      throw new Error("El apellido debe tener al menos 2 caracteres.");
    }
  }

  // Getter y Setter: dni
  get dni() {
    return this.#dni;
  }

  set dni(valor) {
    if (/^\d{7,8}$/.test(valor)) {
      this.#dni = valor;
    } else {
      throw new Error("El DNI debe ser numérico y tener entre 7 y 8 dígitos.");
    }
  }

  // Getter y Setter: email
  get email() {
    return this.#email;
  }

  set email(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(valor)) {
      this.#email = valor.toLowerCase();
    } else {
      throw new Error("Correo electrónico inválido.");
    }
  }

  // Getter y Setter: password
  get password() {
    return this.#password;
  }

  set password(valor) {
    if (typeof valor === "string" && valor.length >= 6) {
      this.#password = valor;
    } else {
      throw new Error("La contraseña debe tener al menos 6 caracteres.");
    }
  }

  // Método adicional: mostrar información pública del cliente
  mostrarInformacionPublica() {
    return `Cliente: ${this.#nombre} ${this.#apellido} - DNI: ${this.#dni} - Email: ${this.#email}`;
  }
}
