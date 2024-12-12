// src/models/Movimiento.js
class Movimiento {
    constructor(tipo, monto, fecha, motivo) {
        if (!this.validarTipo(tipo)) throw new Error('Tipo de movimiento inválido');
        if (!this.validarMonto(monto)) throw new Error('Monto inválido');
        if (!this.validarFecha(fecha)) throw new Error('Fecha inválida');
        if (!this.validarMotivo(motivo)) throw new Error('Motivo inválido');

        this.tipo = tipo; // 'Depósito' o 'Retiro'
        this.monto = monto;
        this.fecha = fecha;
        this.motivo = motivo;
    }

    // Validaciones
    validarTipo(tipo) {
        return tipo === 'Depósito' || tipo === 'Retiro';
    }

    validarMonto(monto) {
        return typeof monto === 'number' && monto > 0;
    }

    validarFecha(fecha) {
        return fecha instanceof Date;
    }

    validarMotivo(motivo) {
        return typeof motivo === 'string' && motivo.trim().length > 0;
    }

    // Getters
    getTipo() {
        return this.tipo;
    }

    getMonto() {
        return this.monto;
    }

    getFecha() {
        return this.fecha;
    }

    getMotivo() {
        return this.motivo;
    }

    // Setters
    setTipo(tipo) {
        if (!this.validarTipo(tipo)) throw new Error('Tipo de movimiento inválido');
        this.tipo = tipo;
    }

    setMonto(monto) {
        if (!this.validarMonto(monto)) throw new Error('Monto inválido');
        this.monto = monto;
    }

    setFecha(fecha) {
        if (!this.validarFecha(fecha)) throw new Error('Fecha inválida');
        this.fecha = fecha;
    }

    setMotivo(motivo) {
        if (!this.validarMotivo(motivo)) throw new Error('Motivo inválido');
        this.motivo = motivo;
    }

    // Métodos adicionales
    resumenMovimiento() {
        const opcionesFecha = { timeZone: 'UTC' }; // Asegura que se use UTC
        const dia = String(this.fecha.getUTCDate()).padStart(2, '0');
        const mes = String(this.fecha.getUTCMonth() + 1).padStart(2, '0');
        const anio = this.fecha.getUTCFullYear();
        return `${this.tipo}: $${this.monto} el ${dia}/${mes}/${anio} por ${this.motivo}`;
      }

}

export default Movimiento;