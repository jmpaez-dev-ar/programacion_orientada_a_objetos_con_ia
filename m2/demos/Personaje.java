public class Personaje {
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

    public Personaje(String nombre) {
        this.nombre = nombre;
    }

    // Getters y Setters
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

    // Método para recibir daño
    public void recibirDanio(int danio) {
        int danioFinal = danio - defensa;
        if (danioFinal > 0) {
            salud -= danioFinal;
            if (salud < 0) {
                salud = 0; // Salud mínima es 0
            }
        }
    }

    // Método para atacar
    public int atacar() {
        return poder;
    }

    // Método para mostrar información del personaje
    @Override
    public String toString() {
        return "Personaje{" +
                "nombre='" + nombre + '\'' +
                ", defensa=" + defensa +
                ", poder=" + poder +
                ", salud=" + salud +
                '}';
    }
}
