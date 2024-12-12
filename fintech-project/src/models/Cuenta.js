// src/models/Cuenta.js
import Movimiento from './Movimiento.js';

class Cuenta {
  constructor(codigo, cliente, saldoInicial = 0) {
    if (!this.validarCodigo(codigo)) throw new Error('Código inválido');
    if (!cliente) throw new Error('Cliente asociado inválido');
    if (!this.validarSaldo(saldoInicial)) throw new Error('Saldo inicial inválido');

    this.codigo = codigo; // Código único
    this.cliente = cliente; // Referencia al objeto Cliente
    this.saldo = saldoInicial;
    this.movimientos = []; // Lista de movimientos
  }

  // Validaciones
  validarCodigo(codigo) {
    return typeof codigo === 'string' && codigo.trim().length > 0;
  }

  validarSaldo(saldo) {
    return typeof saldo === 'number' && saldo >= 0;
  }

  validarMonto(monto) {
    return typeof monto === 'number' && monto > 0;
  }

  // Getters
  getCodigo() {
    return this.codigo;
  }

  getCliente() {
    return this.cliente;
  }

  getSaldo() {
    return this.saldo;
  }

  getMovimientos() {
    return this.movimientos;
  }

  // Métodos adicionales
  depositar(monto, motivo) {
    if (!this.validarMonto(monto)) throw new Error('Monto inválido para depósito');

    this.saldo += monto;
    this.registrarMovimiento('Depósito', monto, motivo);
  }

  retirar(monto, motivo) {
    if (!this.validarMonto(monto)) throw new Error('Monto inválido para retiro');
    if (monto > this.saldo) throw new Error('Saldo insuficiente');

    this.saldo -= monto;
    this.registrarMovimiento('Retiro', monto, motivo);
  }

  registrarMovimiento(tipo, monto, motivo) {
    const movimiento = new Movimiento(tipo, monto, new Date(), motivo);
    this.movimientos.push(movimiento);
  }

  consultarSaldo() {
    return this.saldo;
  }

  transferir(monto, cuentaDestino, motivo) {
    if (!(cuentaDestino instanceof Cuenta)) throw new Error('Cuenta destino inválida');
    this.retirar(monto, `Transferencia a ${cuentaDestino.codigo}: ${motivo}`);
    cuentaDestino.depositar(monto, `Transferencia de ${this.codigo}: ${motivo}`);
  }
}

export default Cuenta;