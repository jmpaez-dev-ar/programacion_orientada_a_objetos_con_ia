// src/models/Fintech.js
import Cliente from './Cliente.js';
import Cuenta from './Cuenta.js';
import Movimiento from './Movimiento.js';

class Fintech {
  constructor() {
    this.clientes = new Map(); // Mapa de clientes por ID
    this.cuentas = new Map(); // Mapa de cuentas por código
    this.clienteIdCounter = 1; // Contador para IDs de clientes
    this.cuentaCodigoCounter = 1; // Contador para códigos de cuentas
  }

  // Crear un cliente
  crearCliente(nombre, apellido, dni, email, password, confirmPassword) {
    if (password !== confirmPassword) {
      throw new Error('Las contraseñas no coinciden');
    }
    const cliente = new Cliente(this.clienteIdCounter++, nombre, apellido, dni, email, password);
    this.clientes.set(cliente.id, cliente);
    return cliente;
  }

  obtenerClientePorId(clienteId) {
    return this.clientes.get(clienteId);
  }

  login(email, password) {
    for (const cliente of this.clientes.values()) {
      if (cliente.email === email && cliente.verificarPassword(password)) {

        // Encuentra la cuenta asociada al cliente
        let cuenta = null;
        for (const c of this.cuentas.values()) {
          if (c.cliente.id === cliente.id) {
            cuenta = c;
            break;
          }
        }

        if (!cuenta) {
          throw new Error('No se encontró una cuenta asociada al cliente');
        }

        // Asigna la cuenta actual
        this.cuentaActual = cuenta.codigo;

        // Retorna el cliente
        return cliente; 
      }
    }
    throw new Error('Credenciales inválidas');
  }

  // Crear una cuenta asociada a un cliente
  crearCuenta(clienteId, saldoInicial = 0) {
    const cliente = this.obtenerClientePorId(clienteId);
    if (!cliente) {
      throw new Error('Cliente no encontrado');
    }
    const cuenta = new Cuenta(`C${this.cuentaCodigoCounter++}`, cliente, saldoInicial);
    this.cuentas.set(cuenta.codigo, cuenta);
    return cuenta;
  }

  obtenerCuentaPorCodigo(codigoCuenta) {
    return this.cuentas.get(codigoCuenta);
  }

  obtenerCuentaPorCliente(clienteId) {
    return Array.from(this.cuentas.values()).find(cuenta => cuenta.cliente.id === clienteId);
  }

  depositar(codigoCuenta, monto, motivo) {
    const cuenta = this.obtenerCuentaPorCodigo(codigoCuenta);
    if (!cuenta) {
      throw new Error('Cuenta no encontrada');
    }
    cuenta.depositar(monto, motivo);
  }

  retirar(codigoCuenta, monto, motivo) {
    const cuenta = this.obtenerCuentaPorCodigo(codigoCuenta);
    if (!cuenta) {
      throw new Error('Cuenta no encontrada');
    }
    cuenta.retirar(monto, motivo);
  }

  transferir(codigoCuentaOrigen, codigoCuentaDestino, monto, motivo) {
    const cuentaOrigen = this.obtenerCuentaPorCodigo(codigoCuentaOrigen);
    const cuentaDestino = this.obtenerCuentaPorCodigo(codigoCuentaDestino);
    if (!cuentaOrigen || !cuentaDestino) {
      throw new Error('Una o ambas cuentas no fueron encontradas');
    }
    cuentaOrigen.transferir(monto, cuentaDestino, motivo);
  }

  consultarSaldo(codigoCuenta) {
    const cuenta = this.obtenerCuentaPorCodigo(codigoCuenta);
    if (!cuenta) {
      throw new Error('Cuenta no encontrada');
    }
    return cuenta.consultarSaldo();
  }

  obtenerMovimientos(codigoCuenta) {
    const cuenta = this.obtenerCuentaPorCodigo(codigoCuenta);
    if (!cuenta) {
      throw new Error('Cuenta no encontrada');
    }
    return cuenta.getMovimientos();
  }
}

export default Fintech;
