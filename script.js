var operandoa;
var operandob;
var operacion;
var suma="";
const resultado = document.getElementById("resultado");
const operacion = document.getElementById("operacion");

function botonmenos(){
    operandoa = suma;
    operacion = "-";
    suma = "";
    resultado.textContent ="";
    operacion.textContent = "-"
    
}
function botonmas(){
    operandoa = suma;
    operacion = "+";
    suma = "";
    resultado.textContent ="";
    operacion.textContent = "+"
    
}
function botonmultiplicar(){
    operandoa = suma;
    operacion = "*";
    suma = "";
    resultado.textContent ="";
    operacion.textContent = "x"
}
function botonsiete(){
    suma+= 7;
    resultado.textContent +="7";
    
 
}
function botonocho(){
    suma+= 8;
    resultado.textContent +="8";
    
}
function botonnueve(){
    resultado.textContent +="9";
    suma+= 9;
    
}
function botoncuatro(){
    resultado.textContent +="4";
    suma+= 4;
    
}
function botoncinco(){
    resultado.textContent +="5";
    suma+= 5;
    
}
function botonseis(){
    resultado.textContent +="6";
    suma+= 6;
    
}
function botonuno(){
    resultado.textContent +="1";
    suma+= 1;
    
}
function botondos(){
    resultado.textContent +="2";
    suma+= 2;
    ;
}
function botontres(){
    resultado.textContent +="3";
    suma+= 3;
    
}
function botoncero(){
    resultado.textContent +="0";
    suma+= 0;
    
}
function botoncerocero(){
    resultado.textContent +="00";
    suma+= 00;
    
}
function botonpunto(){
    resultado.textContent +=".";
    suma+= ".";
    
}
function botonigual()
{
operandob = suma;
resolver();
}
function resolver(){
    var res=0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    suma=res;
    resultado.textContent = suma;
    operacions.textContent = "=";
}
