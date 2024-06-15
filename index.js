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
