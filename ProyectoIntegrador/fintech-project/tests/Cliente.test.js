// tests/Cliente.test.js
import Cliente from '../src/models/Cliente';

describe('Modelo Cliente', () => {
  test('Debe crear un cliente válido', () => {
    const cliente = new Cliente(1, 'Juan', 'Pérez', '12345678', 'juan.perez@example.com', 'password123');
    expect(cliente.getNombre()).toBe('Juan');
    expect(cliente.getApellido()).toBe('Pérez');
    expect(cliente.getDNI()).toBe('12345678');
    expect(cliente.getEmail()).toBe('juan.perez@example.com');
  });

  test('Debe lanzar un error si el nombre es inválido', () => {
    expect(() => {
      new Cliente(1, '', 'Pérez', '12345678', 'juan.perez@example.com', 'password123');
    }).toThrow('Nombre inválido');
  });

  test('Debe lanzar un error si el DNI es inválido', () => {
    expect(() => {
      new Cliente(1, 'Juan', 'Pérez', '123', 'juan.perez@example.com', 'password123');
    }).toThrow('DNI inválido');
  });

  test('Debe verificar correctamente la contraseña', () => {
    const cliente = new Cliente(1, 'Juan', 'Pérez', '12345678', 'juan.perez@example.com', 'password123');
    expect(cliente.verificarPassword('password123')).toBe(true);
    expect(cliente.verificarPassword('wrongpassword')).toBe(false);
  });

  test('Debe cambiar correctamente la contraseña', () => {
    const cliente = new Cliente(1, 'Juan', 'Pérez', '12345678', 'juan.perez@example.com', 'password123');
    cliente.cambiarPassword('newpassword', 'newpassword');
    expect(cliente.verificarPassword('newpassword')).toBe(true);
  });

  test('Debe lanzar un error si las contraseñas no coinciden al cambiar', () => {
    const cliente = new Cliente(1, 'Juan', 'Pérez', '12345678', 'juan.perez@example.com', 'password123');
    expect(() => {
      cliente.cambiarPassword('newpassword', 'differentpassword');
    }).toThrow('Las contraseñas no coinciden');
  });

  test('Debe devolver el nombre completo correctamente', () => {
    const cliente = new Cliente(1, 'Juan', 'Pérez', '12345678', 'juan.perez@example.com', 'password123');
    expect(cliente.obtenerNombreCompleto()).toBe('Juan Pérez');
  });
});
