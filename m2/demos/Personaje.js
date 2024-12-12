class Personaje {
    constructor(nombre, defensa, poder, salud) {
        this.nombre = nombre;
        this.defensa = defensa;
        this.poder = poder;
        this.salud = salud;
    }

    recibirDanio(danio) {
        // Calcula el daño recibido basado en la defensa
        const danioFinal = danio - this.defensa;
        if (danioFinal > 0) {
            this.salud -= danioFinal;
            if (this.salud < 0) {
                this.salud = 0; // Salud mínima es 0
            }
        }
    }

    atacar() {
        // Devuelve el poder de ataque
        return this.poder;
    }

    toString() {
        // Representación en texto del personaje
        return `Personaje { 
            nombre: '${this.nombre}', 
            defensa: ${this.defensa}, 
            poder: ${this.poder}, 
            salud: ${this.salud} 
        }`;
    }
}

// Ejemplo de uso
const personaje = new Personaje("Guerrero", 10, 20, 100);
console.log(personaje.toString());
personaje.recibirDanio(30);
console.log(`Después de recibir daño: ${personaje.toString()}`);
console.log(`El personaje ataca con un poder de: ${personaje.atacar()}`);
