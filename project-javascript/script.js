/*

Ejercicio Entregable: Gestión de Calificaciones de Estudiantes

Objetivo:
Crear un programa interactivo en JavaScript que permita gestionar las calificaciones de un grupo de estudiantes, utilizando métodos de arrays, métodos matemáticos y funciones para realizar diversas operaciones. Todas las interacciones y resultados deben mostrarse por consola.
*/

/*
1. Estructura Inicial (Arrays):
Crea un array llamado estudiantes que contenga objetos. Cada objeto debe representar un estudiante y tener las siguientes propiedades:

nombre: (String) Nombre del estudiante.

calificaciones: (Array de Números) Un array con al menos 3 calificaciones numéricas para ese estudiante.

Inicializa el array estudiantes con al menos 3 estudiantes de ejemplo.

JavaScript:

javascript
Copiar
Editar
// Ejemplo de estructura inicial
let estudiantes = [
  { nombre: "Ana", calificaciones: [85, 90, 78, 92] },
  { nombre: "Juan", calificaciones: [70, 65, 80, 75] },
  { nombre: "Maria", calificaciones: [95, 88, 92, 98] }
];

*/

let estudiantes = [

    { nombre: "Joan Cruz", calificaciones: [100, 92, 78] },
    { nombre: "Camilo Cortes", calificaciones: [70, 45, 95] },
    { nombre: "Paula Sandoval", calificaciones: [92, 81, 67] }
]

/*
mostrarEstudiantes():

Descripción: Itera sobre el array estudiantes y muestra en consola el nombre de cada estudiante y sus calificaciones.

Métodos de Array a usar: forEach() o map().
*/

console.log('Ejercicio 1 > Mostrar estudiantes: ');
let mostrarEstudiantes = estudiantes.forEach(estudiantes =>{
console.log('Los nombres de los estudiantes son: ', estudiantes.nombre);
}
)

/*
Ejercicio 2:

calcularPromedio(calificaciones):

Descripción: Recibe un array de calificaciones y devuelve el promedio de las mismas.

Métodos Matemáticos a usar: reduce() (para sumar) y operaciones aritméticas básicas.

Importante: Asegúrate de que el promedio tenga un número limitado de decimales (por ejemplo, 2). Usa toFixed() o Math.round().
*/
console.log('Ejercicio 2 > Calcular promedio de notas: ');

let calificaciones = [100, 92, 78, 45, 56, 52, 100, 78];

let suma = calificaciones.reduce(function(acumulador, puntuacionActual){
return acumulador + puntuacionActual;
}, 0); 

let promedio = suma / calificaciones.length

let calcularPromedio = Math.round (promedio *100) / 100;

console.log('El promedio de notas del estudiante es:', calcularPromedio);

/*
Ejercicio 3: 

obtenerMejorCalificacion(calificaciones):

Descripción: Recibe un array de calificaciones y devuelve la calificación más alta.

Métodos Matemáticos a usar: Math.max() o reduce().
*/

console.log('Ejercicio 3 > Obtener la calificación más alta:  ');
let calificacionMasAlta = Math.max(...calificaciones) // usando ... spread para 'desempaquetar el array
console.log('La calificación más alta es: ',calificacionMasAlta);

/*
Ejercicio 4: 

obtenerPeorCalificacion(calificaciones):

Descripción: Recibe un array de calificaciones y devuelve la calificación más baja.

Métodos Matemáticos a usar: Math.min() o reduce().
*/

console.log('Ejercicio 4 > Obtener peor calificación: ');

let peorCalificacion = Math.min (...calificaciones)
console.log('La peor calificación es: ', peorCalificacion);

console.log('Ejercicio 5 > agregar calificación: ');

function agregarCalificacion(nombreEstudiante, nuevaCalificacion) {
  const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
  if (estudiante) {
    estudiante.calificaciones.push(nuevaCalificacion);
    console.log(`Calificación ${nuevaCalificacion} agregada a: ${nombreEstudiante}`);
  } else {
console.log("No encontré al estudiante " + nombreEstudiante);
  }
}
agregarCalificacion('Joan Cruz', 80)
agregarCalificacion('sandra', 0)

//Ejercicio 6  

console.log('Ejercicio 6 > Eliminar ultima calificación:');

function eliminarUltimaCalificacion(nombreEstudiante){
  const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);

  if (estudiante) {
    if (estudiante.calificaciones.length > 0){
      const borrado = estudiante.calificaciones.pop();
    console.log('Se eliminó la nota de ' + nombreEstudiante);
    } 
   else {
    console.log("No encontré al estudiante " + nombreEstudiante);
  }} else {
        console.log(`El estudiante ${nombreEstudiante} no existe.`);
    }}
eliminarUltimaCalificacion('Joan Cruz')
eliminarUltimaCalificacion('Felipe')

/*
Ejercicio 7:
filtrarEstudiantesAprobados (promedioMinimo):
Descripción: Recorre el array de estudiantes y devuelve un nuevo array con los estudiantes cuyo promedio sea igual o superior al promedioMinimo dado.
Métodos de Array a usar: filter().
Dependencia: Deberá usar la función calcularPromedio().
*/

console.log('Ejercicio 7 > Filtrar estudiantes aprobados con promedio minimo: ');
 
function calcularPromedio2(calificaciones) {
    if (!Array.isArray(calificaciones) || calificaciones.length === 0) {
        return 0; // Manejo para arrays vacíos o no válidos
    }
    const suma = calificaciones.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / calificaciones.length;
}
    const todasLasCalificaciones = estudiantes.reduce((acumulador, estudiante) => {
    // El operador spread (...) desempaqueta las calificaciones del estudiante actual
    // y las añade al array 'acumulador' (que se va construyendo)
    return [...acumulador, ...estudiante.calificaciones];
}, []); // El [] al final es el valor inicial del 'acumulador'

const promedioGeneralDeCalificaciones = calcularPromedio2(todasLasCalificaciones);

console.log("calificaciones (promedio general):", promedioGeneralDeCalificaciones);

function calcularPromedio3(estudiante) {
    if (!Array.isArray(estudiante) || estudiante.length === 0) {
        return 0; // Evita división por cero si no hay calificaciones
    }
    const suma = estudiante.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / estudiante.length;
}

function filtrarEstudiantesAprobados(promedioMinimo) {
    const estudiantesAprobados = estudiantes.filter(estudiante => {
        const promedioIndividual = calcularPromedio3(estudiante.calificaciones);
        return promedioIndividual >= promedioMinimo;
    });
    return estudiantesAprobados;
}
;
const aprobadosCon80 = filtrarEstudiantesAprobados(80);


console.log("Estudiantes con promedio individual >= 80: }", aprobadosCon80 )

/*
Ejercicio 8:

ordenarEstudiantesPorNombre():

Descripción: Ordena el array estudiantes alfabéticamente por nombre. Debe modificar el array original.

Métodos de Array a usar: sort().
*/

console.log('Ejercicio 8 > Ordenar estudiantes por orden alfabetico: ');
let ordenarEstudiantesPorNombre = estudiantes.sort((a,b) => {
return  a.nombre.localeCompare(b.nombre)
}
 )

console.log('La lista de estudiantes organizadas alfabeticamente es: ',estudiantes);

/*
Ejercicio 9: 
generarReporteIndividual(nombreEstudiante):
Descripción: Genera y muestra un reporte detallado para un estudiante específico, incluyendo:

Nombre del estudiante.

Todas sus calificaciones.

Promedio de calificaciones.

Calificación más alta.

Calificación más baja.

Dependencias: Deberá usar las funciones calcularPromedio(), obtenerMejorCalificacion() y obtenerPeorCalificacion().

*/

console.log('Ejercicio 9 > Generar reporte del estudiante: ');
function calcularPromedio4(calificaciones) {
  const suma = calificaciones.reduce((acc, nota) => acc + nota, 0);
  return Math.round((suma / calificaciones.length) * 100) / 100;
}

function obtenerMejorCalificacion(calificaciones) {
  return Math.max(...calificaciones);
}

function obtenerPeorCalificacion(calificaciones) {
  return Math.min(...calificaciones);
}

function generarReporteIndividual(nombreEstudiante) {
  const estudiante = estudiantes.find(e => e.nombre.toLowerCase() === nombreEstudiante.toLowerCase());

  if (!estudiante) {
    console.log(`⚠️ Estudiante con nombre "${nombreEstudiante}" no encontrado.`);
    return;
  }

  const promedio = calcularPromedio4(estudiante.calificaciones);
  const mejorNota = obtenerMejorCalificacion(estudiante.calificaciones);
  const peorNota = obtenerPeorCalificacion(estudiante.calificaciones);

  console.log("📄 Reporte del Estudiante:");
  console.log("Nombre:", estudiante.nombre);
  console.log("Calificaciones:", estudiante.calificaciones.join(", "));
  console.log("Promedio:", promedio);
  console.log("Calificación más alta:", mejorNota);
  console.log("Calificación más baja:", peorNota);
}

generarReporteIndividual('Joan Cruz')

/*
Ejercicio 10:

Funcionalidad Principal (Menú Interactivo):
Crea una función principal, por ejemplo iniciarGestionCalificaciones(), que:

Muestre un menú de opciones en la consola al usuario (ej. "1. Mostrar estudiantes", "2. Agregar calificación", "3. Generar reporte individual", etc.).

Permita al usuario ingresar una opción (puedes simular la entrada del usuario usando prompt() si estás en un navegador o readline si estás en Node.js, pero para simplicidad en la consola puedes simplemente llamar a las funciones con valores predefinidos para la entrega).

Ejecute la función correspondiente según la opción seleccionada.

El menú debe repetirse hasta que el usuario elija una opción de "salir".
*/

 console.log('Ejercicio interactivo > Para usar, llame a la función iniciarGestionCalificaciones()')

function iniciarGestionCalificaciones() {
  let opcion;

  do {
    opcion = prompt(
      "📚 Gestión de Calificaciones\n\n" +
      "1. Mostrar estudiantes\n" +
      "2. Agregar calificación\n" +
      "3. Eliminar última calificación\n" +
      "4. Filtrar estudiantes aprobados (>= 80)\n" +
      "5. Ordenar estudiantes por nombre\n" +
      "6. Generar reporte individual\n" +
      "7. Salir\n\n" +
      "Elige una opción (1-7):"
    );

    switch (opcion) {
      case "1":
        estudiantes.forEach(est => {
          console.log(`Nombre: ${est.nombre} | Notas: ${est.calificaciones.join(", ")}`);
        });
        break;

      case "2":
        const nombreAgregar = prompt("Nombre del estudiante:");
        const nuevaNota = parseFloat(prompt("Nueva calificación:"));
        agregarCalificacion(nombreAgregar, nuevaNota);
        break;

      case "3":
        const nombreEliminar = prompt("Nombre del estudiante:");
        eliminarUltimaCalificacion(nombreEliminar);
        break;

      case "4":
        const aprobados = filtrarEstudiantesAprobados(80);
        console.log("✅ Estudiantes aprobados (promedio >= 80):");
        aprobados.forEach(est => {
          console.log(`${est.nombre} → ${est.calificaciones.join(", ")}`);
        });
        break;

      case "5":
        estudiantes.sort((a, b) => a.nombre.localeCompare(b.nombre));
        console.log("📋 Estudiantes ordenados alfabéticamente:");
        estudiantes.forEach(est => console.log(est.nombre));
        break;

      case "6":
        const nombreReporte = prompt("Nombre del estudiante:");
        generarReporteIndividual(nombreReporte);
        break;

      case "7":
        alert("👋 Gracias por usar el sistema. ¡Hasta pronto!");
        break;

      default:
        alert("❗ Opción inválida. Intenta de nuevo.");
    }

  } while (opcion !== "7");
}
//Para usar llame a la función:

//iniciarGestionCalificaciones();
