class Personaje:
    def __init__(self, nombre, defensa, poder, salud):
        self.nombre = nombre
        self.defensa = defensa
        self.poder = poder
        self.salud = salud

    def recibir_danio(self, danio):
        """Calcula el daño recibido basado en la defensa."""
        danio_final = danio - self.defensa
        if danio_final > 0:
            self.salud -= danio_final
            if self.salud < 0:
                self.salud = 0  # Salud mínima es 0

    def atacar(self):
        """Devuelve el poder de ataque del personaje."""
        return self.poder

    def __str__(self):
        """Representación en texto del personaje."""
        return f"Personaje(nombre='{self.nombre}', defensa={self.defensa}, poder={self.poder}, salud={self.salud})"

# Ejemplo de uso
if __name__ == "__main__":
    personaje = Personaje("Guerrero", defensa=10, poder=20, salud=100)
    print(personaje)
    personaje.recibir_danio(30)
    print(f"Después de recibir daño: {personaje}")
    print(f"El personaje ataca con un poder de: {personaje.atacar()}")
