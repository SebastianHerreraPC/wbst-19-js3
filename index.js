//primer array

let months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

console.log(months[1]);

// arrays length empieza desde el 0
console.log(months.length);

//ejercicio

let rutina = [
  "Levantarse",
  "Cepillar dientes",
  "mirar el telefono",
  "tomar un baño",
];
console.log(rutina);

//mostrar el primer elemento y ultimo
console.log(rutina[0]);
console.log(rutina[rutina.length - 1]);

//sustituir elementos y agregar nuevos
rutina[2] = "Ejercicio";
rutina[rutina.length - 1] = "Lavar platos";
console.log(rutina);

//BUCLES se hacen mientras sean true

//for es con un numero definido de repeticiones
const sunombre = ["1", "2", "3", "4", "5"];

for (let i = 0; i < sunombre.length; i++) console.log(sunombre[i]);

// primero le doy el valor a i que funciona como indice, luego la condicion si i es menor que la longitud de la variable, entonces aumenta uno a el bucle y repite
// solo da cada dos

for (let i = 0; i < sunombre.length; i += 2) console.log(sunombre[i]);

//usando while que se ejecuta mientras sea verdadero

i = 0;
while (i < sunombre.length) {
  console.log(sunombre[i], i++);
}
