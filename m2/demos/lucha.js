// Clase base para personajes
class Personaje {
  constructor(nombre, salud, poder) {
    this.nombre = nombre;
    this.salud = salud;
    this.poder = poder;
  }

  atacar(objetivo) {
    console.log(`${this.nombre} ataca a ${objetivo.nombre} con ${this.poder} de poder.`);
    objetivo.recibirDaño(this.poder);
  }

  recibirDaño(cantidad) {
    this.salud -= cantidad;
    console.log(`${this.nombre} ahora tiene ${this.salud} de salud.`);
    if (this.salud <= 0) {
      console.log(`${this.nombre} ha sido derrotado.`);
    }
  }
}

// Crear objeto Superman
const superman = new Personaje("Superman", 1000, 120);

// Crear objeto Omni-Man
const omniMan = new Personaje("Omni-Man", 950, 130);

// Ejemplo de batalla
superman.atacar(omniMan);
omniMan.atacar(superman);
