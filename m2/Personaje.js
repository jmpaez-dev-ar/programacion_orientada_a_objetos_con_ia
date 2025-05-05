class Personaje {
    constructor(nombre, defensa, poder, salud) {
      this.nombre = nombre;
      this.defensa = defensa;
      this.poder = poder;
      this.salud = salud;
    }
  
    mostrarInformacion() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Defensa: ${this.defensa}`);
      console.log(`Poder: ${this.poder}`);
      console.log(`Salud: ${this.salud}`);
    }
  }
  
  // Ejemplo de uso:
  const heroe = new Personaje("Arthas", 50, 70, 100);
  heroe.mostrarInformacion();
  