var alumnos = [
    "Carlos Manuel",
    "Cesar Oziel",
    "Regina",
    "Diego Leonardo",
    "Andrea Carolina",
    "Mayela Mayté",
    "Eder Abraham",
    "Diego Alonso",
    "Naomi Michelle",
    "Eder Abisai",
    "Regina",
    "Carlos",
    "Carlos"
];

console.log("Arreglo original:", alumnos);

console.log("\n--- MANIPULACIÓN ---");

alumnos.push("Juan");
console.log("Después de push('Juan'):", alumnos);

alumnos.pop();
console.log("Después de pop():", alumnos);

alumnos.unshift("María");
console.log("Después de unshift('María'):", alumnos);

alumnos.shift();
console.log("Después de shift():", alumnos);

console.log("\n--- CONSULTA ---");

var indice = alumnos.indexOf("Regina");
console.log("indexOf('Regina'):", indice);

var existe = alumnos.includes("Diego Leonardo");
console.log("includes('Diego Leonardo'):", existe);

var encontrado = alumnos.find(nombre => nombre.startsWith("E"));
console.log("find(nombre que empiece con E):", encontrado);

var indiceEncontrado = alumnos.findIndex(nombre => nombre.startsWith("E"));
console.log("findIndex(nombre que empiece con E):", indiceEncontrado);

console.log("\n--- RECORRIDO ---");

console.log("forEach:");
alumnos.forEach(alumno => console.log("- " + alumno));

var longitudNombres = alumnos.map(nombre => nombre.length);
console.log("map(longitud de nombres):", longitudNombres);

var nombresLargos = alumnos.filter(nombre => nombre.length > 10);
console.log("filter(nombres con más de 10 letras):", nombresLargos);

var totalLetras = alumnos.reduce((total, nombre) => total + nombre.length, 0);
console.log("reduce(total de letras):", totalLetras);

console.log("\n--- ORDEN ---");

var frutas = ["manzana", "pera", "uva", "banana"];
frutas.sort();
console.log("frutas.sort():", frutas);

frutas.reverse();
console.log("frutas.reverse():", frutas);

var numeros = [5, 2, 8, 1, 9];
numeros.sort((a, b) => a - b);
console.log("numeros ordenados:", numeros);

var arr1 = ["a", "b", "c"];
arr1.splice(1, 1, "x");
console.log("splice(1,1,'x'):", arr1);

var arr2 = ["rojo", "verde", "azul", "amarillo"];
var porcion = arr2.slice(1, 3);
console.log("slice(1,3) de colores:", porcion);

console.log("\n--- OTROS ---");

var arr3 = [1, 2];
var arr4 = [3, 4];
var union = arr3.concat(arr4);
console.log("concat([1,2] + [3,4]):", union);

var anidado = [1, [2, 3], [4, 5]];
var aplanado = anidado.flat();
console.log("flat() de arreglo anidado:", aplanado);

var nums = [1, 2, 3, 4, 5];
var algunoMayor = nums.some(n => n > 4);
console.log("some(n > 4):", algunoMayor);

var todosPositivos = nums.every(n => n > 0);
console.log("every(n > 0):", todosPositivos);