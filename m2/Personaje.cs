public class Personaje
{
    // Propiedades
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

    // Método para mostrar información del personaje
    public void MostrarInformacion()
    {
        Console.WriteLine($"Nombre: {Nombre}");
        Console.WriteLine($"Defensa: {Defensa}");
        Console.WriteLine($"Poder: {Poder}");
        Console.WriteLine($"Salud: {Salud}");
    }
}
