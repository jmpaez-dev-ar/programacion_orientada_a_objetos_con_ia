import { Cliente } from '../models/Cliente.js';

describe('Clase Cliente', () => {
  // ✅ Prueba 1: Crear instancia válida
  test('debería crear una instancia válida de Cliente', () => {
    const cliente = new Cliente("Ana", "López", "30567890", "ana@mail.com", "segura123");

    expect(cliente.mostrarInformacionPublica()).toContain("Ana López");
    expect(cliente.email).toBe("ana@mail.com");
    expect(cliente.dni).toBe("30567890");
  });

  // ❌ Prueba 2: Validación de nombre inválido
  test('debería lanzar error si el nombre es demasiado corto', () => {
    expect(() => {
      new Cliente("A", "Pérez", "30123456", "a@mail.com", "clave123");
    }).toThrow("El nombre debe tener al menos 2 caracteres.");
  });

  // ❌ Prueba 3: Validación de email inválido
  test('debería lanzar error si el email no tiene formato válido', () => {
    expect(() => {
      new Cliente("Juan", "Pérez", "30123456", "correo-mal", "clave123");
    }).toThrow("Correo electrónico inválido.");
  });

  // ❌ Prueba 4: Validación de contraseña muy corta
  test('debería lanzar error si la contraseña tiene menos de 6 caracteres', () => {
    expect(() => {
      new Cliente("Lucía", "Martínez", "30123456", "lucia@mail.com", "123");
    }).toThrow("La contraseña debe tener al menos 6 caracteres.");
  });

  // ❌ Prueba 5: Modificación inválida usando setters
  test('debería lanzar error al intentar modificar el DNI con un valor no numérico', () => {
    const cliente = new Cliente("Carlos", "Mora", "31234567", "carlos@mail.com", "seguro456");
    expect(() => {
      cliente.dni = "ABC123";
    }).toThrow("El DNI debe ser numérico y tener entre 7 y 8 dígitos.");
  });

  // ✅ Prueba 6: Modificación válida usando setters
  test('debería permitir cambiar el nombre a uno válido', () => {
    const cliente = new Cliente("Pedro", "Gómez", "30890123", "pedro@mail.com", "miclave456");
    cliente.nombre = "Pablo";
    expect(cliente.nombre).toBe("Pablo");
  });
});
