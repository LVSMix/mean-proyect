/** Creando funciones **/

function sumar(a,b){
  return a+b;
}

var c = sumar(1,2);

var sumar = function(a,b){
  return a+b;
}

var c*sumar(1,2);

/*** Se puede hacer funciones que retornen funciones y llamarlas directamente***/

function getFunction(){
  var sumar = function(a,b){
    return a+b;
  }
  return sumar;
}

var c*getFunction()(1,2);


/**** JSON ****/

var persona = [];

/* Asignando atributos al objeto*/

/* Primera Opcion*/

var pesona ={
  nombre:"juan",
  apellido:"Barrios",
  edad: 34
}

/* Segunda opcion */
/* Una vez creado el objeto */

var persona = {};

persona.nombre = "Juan";
persona.apellido = "Barrios";
persona.edad = 34;

/* Tercera opcion */
/* Mediante un constructor*/

funcion Persona(){
    this.nombre = "Juan";
    this.apellido = "Barrios";
    this.edad = 34
}

var persona = new Persona();

/** Asignando Funciones**/

var persona(){
  nombre : "Juan",
  apellido : "Barrios",
  edad : 34,
  getNombreCompleto:function(){
    return this.nombre+""+this.apellido;
  }
}

var persona = {};

persona.nombre = "Juan";
persona.apellido = "Barrios";
persona.edad = 34;
persona.getNombreCompleto=function(){
  return this.nombre+""+this.apellido
}


funcion Persona(){
  this.nombre = "Juan";
  this.apellido = "Barrios";
  this.edad = 34
  this.getNombreCompleto = function(){
    return this.nombre+""+ this.apellido;
  }
}

var persona = new Persona();