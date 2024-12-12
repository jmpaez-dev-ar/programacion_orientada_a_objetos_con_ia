// tests/Fintech.test.js
import Fintech from '../src/models/Fintech.js';

describe('Modelo Fintech', () => {
  let fintech;

  beforeEach(() => {
    fintech = new Fintech();
  });

  test('Debe crear un cliente válido', () => {
    const cliente = fintech.crearCliente('Juan', 'Pérez', '12345678', 'juan@example.com', 'password123', 'password123');
    expect(cliente.nombre).toBe('Juan');
    expect(cliente.apellido).toBe('Pérez');
    expect(cliente.dni).toBe('12345678');
    expect(cliente.email).toBe('juan@example.com');
  });

  test('Debe lanzar un error si las contraseñas no coinciden', () => {
    expect(() => {
      fintech.crearCliente('Juan', 'Pérez', '12345678', 'juan@example.com', 'password123', 'wrongpassword');
    }).toThrow('Las contraseñas no coinciden');
  });

  test('Debe lanzar un error si falta algún campo obligatorio', () => {
    expect(() => {
      fintech.crearCliente('', 'Pérez', '12345678', 'juan@example.com', 'password123', 'password123');
    }).toThrow('Nombre inválido');
  });

  test('Debe permitir login con credenciales válidas', () => {
    fintech.crearCliente('Juan', 'Pérez', '12345678', 'juan@example.com', 'password123', 'password123');
    const cliente = fintech.login('juan@example.com', 'password123');
    expect(cliente.nombre).toBe('Juan');
  });

  test('Debe lanzar un error si las credenciales son incorrectas', () => {
    fintech.crearCliente('Juan', 'Pérez', '12345678', 'juan@example.com', 'password123', 'password123');
    expect(() => {
      fintech.login('juan@example.com', 'wrongpassword');
    }).toThrow('Credenciales inválidas');
  });

  test('Debe crear una cuenta asociada a un cliente', () => {
    const cliente = fintech.crearCliente('Juan', 'Pérez', '12345678', 'juan@example.com', 'password123', 'password123');
    const cuenta = fintech.crearCuenta(cliente.id, 500);
    expect(cuenta.getSaldo()).toBe(500);
    expect(cuenta.getCliente()).toBe(cliente);
  });

  test('Debe permitir depositar dinero en una cuenta', () => {
    const cliente = fintech.crearCliente('Juan', 'Pérez', '12345678', 'juan@example.com', 'password123', 'password123');
    const cuenta = fintech.crearCuenta(cliente.id, 500);
    fintech.depositar(cuenta.codigo, 200, 'Depósito inicial');
    expect(cuenta.getSaldo()).toBe(700);
  });

  test('Debe permitir retirar dinero de una cuenta', () => {
    const cliente = fintech.crearCliente('Juan', 'Pérez', '12345678', 'juan@example.com', 'password123', 'password123');
    const cuenta = fintech.crearCuenta(cliente.id, 500);
    fintech.retirar(cuenta.codigo, 200, 'Retiro parcial');
    expect(cuenta.getSaldo()).toBe(300);
  });

  test('Debe lanzar un error si el saldo es insuficiente para el retiro', () => {
    const cliente = fintech.crearCliente('Juan', 'Pérez', '12345678', 'juan@example.com', 'password123', 'password123');
    const cuenta = fintech.crearCuenta(cliente.id, 500);
    expect(() => {
      fintech.retirar(cuenta.codigo, 600, 'Retiro fallido');
    }).toThrow('Saldo insuficiente');
  });

  test('Debe permitir transferir dinero entre cuentas', () => {
    const cliente1 = fintech.crearCliente('Juan', 'Pérez', '12345678', 'juan@example.com', 'password123', 'password123');
    const cliente2 = fintech.crearCliente('Maria', 'González', '87654321', 'maria@example.com', 'password123', 'password123');
    const cuenta1 = fintech.crearCuenta(cliente1.id, 500);
    const cuenta2 = fintech.crearCuenta(cliente2.id, 300);
    fintech.transferir(cuenta1.codigo, cuenta2.codigo, 200, 'Pago de servicios');
    expect(cuenta1.getSaldo()).toBe(300);
    expect(cuenta2.getSaldo()).toBe(500);
  });

  test('Debe obtener los movimientos de una cuenta', () => {
    const cliente = fintech.crearCliente('Juan', 'Pérez', '12345678', 'juan@example.com', 'password123', 'password123');
    const cuenta = fintech.crearCuenta(cliente.id, 500);
    fintech.depositar(cuenta.codigo, 200, 'Depósito inicial');
    const movimientos = fintech.obtenerMovimientos(cuenta.codigo);
    expect(movimientos.length).toBe(1);
    expect(movimientos[0].getMotivo()).toBe('Depósito inicial');
  });
});
