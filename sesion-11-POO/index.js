class Estudiante {

  constructor(nombre, asignaturas) {
    this.nombre = nombre;
    this.asignaturas = asignaturas;
  }

  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas
    }
  }

}

const pedro = new Estudiante("Pedro", ["JavaScript", "HTML", "CSS"]);

console.log(pedro.obtenDatos());