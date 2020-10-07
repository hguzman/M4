
# Introducción a JS

<https://pollev.com/sergiomonsal736>






Entorno y Ambiente de Trabajo
Developer Tools


Comentarios

Constantes
Variables 

var 
let



Valores
Tipos
Operadores


Strings
Numeros 
Booleanos


Operadores

operación

+
-
*
/
++
--
+=
-=
*=
/=


comparación
==
!=
===
!==
>
<
>=
<=


Operadores Unarios
Operadores Binarios

El operador ternario


Conversión de tipos Automatica

Expresiones vs Enunciados

Bindings


console.log

Valores de Retorno


Ejecución Condicionada



Switch

Ciclos

While
for

Indentación del Código

Break

Funciones


Funciones Flecha

Recursión

Efectos Secundarios

Estructuras de Datos Objetos y Arrays


Propiedades  

.   <- Nombre de la propiedad
[]


valor["Sergio Monsalve"]
valor["3.141592"]
valor["7"]

array.lenght
array["lenght"]


toUpperCase 
toLowerCase,



### Ejercicio


push non Fizz values 


## Objetos


let day1 = {
squirrel: false,
events: ["work", "touched tree", "pizza", "running"]
}; console.log(day1.squirrel); // → false console.log(day1.wolf);
// → undefined
day1.wolf = false; console.log(day1.wolf);
// → false  




let descriptions = {
work: "Went to work",
"touched tree": "Touched a tree"
};


let anObject = {left: 1, right: 2}; console.log(anObject.left);
// → 1
delete anObject.left; console.log(anObject.left);
// → undefined
console.log("left" in anObject); // → false
console.log("right" in anObject); // → true
