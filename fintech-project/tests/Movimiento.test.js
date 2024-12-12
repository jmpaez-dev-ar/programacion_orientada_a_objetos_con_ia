// tests/Movimiento.test.js
import Movimiento from '../src/models/Movimiento';

describe('Modelo Movimiento', () => {
  test('Debe crear un movimiento válido', () => {
    const fecha = new Date();
    const movimiento = new Movimiento('Depósito', 100, fecha, 'Pago de salario');
    expect(movimiento.getTipo()).toBe('Depósito');
    expect(movimiento.getMonto()).toBe(100);
    expect(movimiento.getFecha()).toBe(fecha);
    expect(movimiento.getMotivo()).toBe('Pago de salario');
  });

  test('Debe lanzar un error si el tipo es inválido', () => {
    const fecha = new Date();
    expect(() => {
      new Movimiento('Transferencia', 100, fecha, 'Pago de servicios');
    }).toThrow('Tipo de movimiento inválido');
  });

  test('Debe lanzar un error si el monto es inválido', () => {
    const fecha = new Date();
    expect(() => {
      new Movimiento('Depósito', -50, fecha, 'Pago de servicios');
    }).toThrow('Monto inválido');
  });

  test('Debe lanzar un error si la fecha es inválida', () => {
    expect(() => {
      new Movimiento('Depósito', 100, '2023-01-01', 'Pago de servicios');
    }).toThrow('Fecha inválida');
  });

  test('Debe lanzar un error si el motivo es inválido', () => {
    const fecha = new Date();
    expect(() => {
      new Movimiento('Depósito', 100, fecha, '');
    }).toThrow('Motivo inválido');
  });

  test('Debe permitir cambiar el tipo de movimiento', () => {
    const fecha = new Date();
    const movimiento = new Movimiento('Depósito', 100, fecha, 'Pago de salario');
    movimiento.setTipo('Retiro');
    expect(movimiento.getTipo()).toBe('Retiro');
  });

  test('Debe generar un resumen del movimiento', () => {
    const fecha = new Date('2023-01-01');
    const movimiento = new Movimiento('Depósito', 200, fecha, 'Pago de salario');
    expect(movimiento.resumenMovimiento()).toBe('Depósito: $200 el 01/01/2023 por Pago de salario');
  });
});
