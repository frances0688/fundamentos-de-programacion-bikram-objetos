// Object declaration
const Coche = {
    marca: '',
    modelo: '',
    matricula: ''
};

const Casa = {
    codPostal: '',
    calle: '',
    portal: '',
    piso: ''
};

const FullStackDeveloper = {
    lenguajes: [],
    proyectos: []
};

const Perro = {
    nombre: '',
    raza: '',
    color: '',
    edad: '',
    ladrar: function(){console.log('bark!')},
    popo: function(){return Math.random() * 3} 
}

// Accessing properties
const marcaPortatil = Portatil.marca;

const marcaPortatil2 = Portatil['marca'];

const grupos = Concierto.grupos;

const RGB = [Led.rojo, Led.verde, Led.azul];

// Modifying properties
Portatil.modelo = 'P345';

Concierto.cartelera.push("Guns N' Roses");

Concierto.fecha = new(Date);

Impresora.imprimiendo = {
    nombreArchivo: '',
    copias: '',
    numPaginas: ''
};


// Pair Programming

// Object declaration
const Noticia = {
    titular: '',
    cuerpo: ''
};

const Persona = {
    nombre: '',
    apellidos: '',
    edad: ''
};

const Avion = {
    numPasajeros: '',
    despegar: function(){console.log('despegando')},
    volar: function(){console.log('llegando al destino')}, 
    aterrizar: function(){console.log('aterrizando')}
};

const Paquete = {
    contenido: []
};

const Pais = {
    numHabitantes: '',
    continente: '',
    gentilicio: ''
};

// Reading properties
const codError = O_Error.codigo;

const integrantes = Grupo.integrantes;

const nivelesTinta = Impresora.tinta;

const pixeles = Pantalla.pixeles;

const especificaciones = Movil.especificaciones;

// Modifying properties
Grupo.numIntegrantes = 5;

Pantalla.dimensiones = '1920x1080';

Led.encendido = !Boolean;

Movil.temperatura = "20º";