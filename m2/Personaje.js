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
  const superman = new Personaje("Superman", 50, 70, 100);
  superman.mostrarInformacion();
  
  const ironMan = new Personaje("IronMan", 80, 90, 100);
  ironMan.mostrarInformacion();
  