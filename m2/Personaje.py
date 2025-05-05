class Personaje:
    def __init__(self, nombre, defensa, poder, salud):
        self.nombre = nombre
        self.defensa = defensa
        self.poder = poder
        self.salud = salud

    def mostrar_informacion(self):
        print(f"Nombre: {self.nombre}")
        print(f"Defensa: {self.defensa}")
        print(f"Poder: {self.poder}")
        print(f"Salud: {self.salud}")

# Ejemplo de uso
heroe = Personaje("Arthas", 50, 70, 100)
heroe.mostrar_informacion()
