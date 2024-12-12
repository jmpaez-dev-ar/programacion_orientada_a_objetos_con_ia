// tests/Cuenta.test.js
import Cuenta from '../src/models/Cuenta';
import Cliente from '../src/models/Cliente';

describe('Modelo Cuenta', () => {
  let cliente;

  beforeEach(() => {
    cliente = new Cliente(1, 'Juan', 'Pérez', '12345678', 'juan.perez@example.com', 'password123');
  });

  test('Debe crear una cuenta válida', () => {
    const cuenta = new Cuenta('C001', cliente, 1000);
    expect(cuenta.getCodigo()).toBe('C001');
    expect(cuenta.getCliente()).toBe(cliente);
    expect(cuenta.getSaldo()).toBe(1000);
    expect(cuenta.getMovimientos()).toEqual([]);
  });

  test('Debe lanzar un error si el saldo inicial es negativo', () => {
    expect(() => {
      new Cuenta('C002', cliente, -500);
    }).toThrow('Saldo inicial inválido');
  });

  test('Debe realizar un depósito correctamente', () => {
    const cuenta = new Cuenta('C003', cliente, 500);
    cuenta.depositar(200, 'Depósito inicial');
    expect(cuenta.getSaldo()).toBe(700);
    expect(cuenta.getMovimientos().length).toBe(1);
    expect(cuenta.getMovimientos()[0].monto).toBe(200);
  });

  test('Debe lanzar un error si el monto de depósito es inválido', () => {
    const cuenta = new Cuenta('C004', cliente, 500);
    expect(() => {
      cuenta.depositar(-100, 'Monto inválido');
    }).toThrow('Monto inválido para depósito');
  });

  test('Debe realizar un retiro correctamente', () => {
    const cuenta = new Cuenta('C005', cliente, 1000);
    cuenta.retirar(200, 'Retiro parcial');
    expect(cuenta.getSaldo()).toBe(800);
    expect(cuenta.getMovimientos().length).toBe(1);
    expect(cuenta.getMovimientos()[0].monto).toBe(200);
  });

  test('Debe lanzar un error si el monto del retiro es mayor al saldo', () => {
    const cuenta = new Cuenta('C006', cliente, 300);
    expect(() => {
      cuenta.retirar(500, 'Retiro excesivo');
    }).toThrow('Saldo insuficiente');
  });

  test('Debe realizar una transferencia correctamente', () => {
    const cuenta1 = new Cuenta('C007', cliente, 1000);
    const cuenta2 = new Cuenta('C008', cliente, 500);
    cuenta1.transferir(200, cuenta2, 'Pago de servicios');
    expect(cuenta1.getSaldo()).toBe(800);
    expect(cuenta2.getSaldo()).toBe(700);
    expect(cuenta1.getMovimientos().length).toBe(1);
    expect(cuenta2.getMovimientos().length).toBe(1);
  });

  test('Debe lanzar un error si la cuenta destino es inválida', () => {
    const cuenta = new Cuenta('C009', cliente, 1000);
    expect(() => {
      cuenta.transferir(200, {}, 'Transferencia fallida');
    }).toThrow('Cuenta destino inválida');
  });
});
