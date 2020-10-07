var x = Number(prompt("ingrese un numero"));
switch (true) {
    case (x < 5):
        alert("<5");
        break;
    case (x <= 10):
        alert("5-10");
    case (x <= 20):
        alert("menor que 20");
    default:
        alert("mayor a 20");
        break;
}