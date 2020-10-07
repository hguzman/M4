var a = Number(prompt("ingrese un numero: "));
console.log(typeof a);
switch (a){ 
    case (1):
        console.log("pequeño");
        break;
    case (2):
        console.log("mediano"); 
        break;
    case (3):
        console.log("medio grande");
        break;
   default:
        console.log("muy grande!");
        break; 
}


var x = Number(prompt("ingrese un numero"));
switch (true) {
    case (x < 5):
        alert("less than five");
        break;
    case (x < 9):
        alert("between 5 and 8");
        break;
    case (x < 12):
        alert("between 9 and 11");
        break;
    default:
        alert("none");
        break;
}


switch (expresión) {
    case valor1:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      [break;]
    case valor2:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      [break;]
    ...
    case valorN:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      [break;]
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      [break;]
  }