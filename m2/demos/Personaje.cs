public class Personaje
{
    public string Nombre { get; set; }
    public int Defensa { get; set; }
    public int Poder { get; set; }
    public int Salud { get; set; }

    // Constructor
    public Personaje(string nombre, int defensa, int poder, int salud)
    {
        Nombre = nombre;
        Defensa = defensa;
        Poder = poder;
        Salud = salud;
    }

    // Método para recibir daño
    public void RecibirDanio(int danio)
    {
        int danioFinal = danio - Defensa;
        if (danioFinal > 0)
        {
            Salud -= danioFinal;
            if (Salud < 0)
            {
                Salud = 0; // La salud mínima es 0
            }
        }
    }

    // Método para atacar
    public int Atacar()
    {
        return Poder;
    }

    // Método para mostrar información del personaje
    public override string ToString()
    {
        return $"Personaje {{ Nombre: {Nombre}, Defensa: {Defensa}, Poder: {Poder}, Salud: {Salud} }}";
    }
}

// Ejemplo de uso
class Program
{
    static void Main(string[] args)
    {
        Personaje personaje = new Personaje("Guerrero", 10, 20, 100);
        Console.WriteLine(personaje.ToString());
        
        personaje.RecibirDanio(30);
        Console.WriteLine($"Después de recibir daño: {personaje}");
        
        Console.WriteLine($"El personaje ataca con un poder de: {personaje.Atacar()}");
    }
}
