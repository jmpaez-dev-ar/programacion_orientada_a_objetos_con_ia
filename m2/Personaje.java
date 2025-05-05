public class Personaje {
    // Atributos
    private String nombre;
    private int defensa;
    private int poder;
    private int salud;

    // Constructor
    public Personaje(String nombre, int defensa, int poder, int salud) {
        this.nombre = nombre;
        this.defensa = defensa;
        this.poder = poder;
        this.salud = salud;
    }

    // Métodos getters y setters
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getDefensa() {
        return defensa;
    }

    public void setDefensa(int defensa) {
        this.defensa = defensa;
    }

    public int getPoder() {
        return poder;
    }

    public void setPoder(int poder) {
        this.poder = poder;
    }

    public int getSalud() {
        return salud;
    }

    public void setSalud(int salud) {
        this.salud = salud;
    }

    // Método para mostrar información del personaje
    public void mostrarInformacion() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Defensa: " + defensa);
        System.out.println("Poder: " + poder);
        System.out.println("Salud: " + salud);
    }
}
