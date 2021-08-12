// Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Lados del cuadardo miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadardo es: " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado
function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El área del cuadardo es: " + areaCuadrado + "cm2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;
const alturatriangulo = 5.5;
/*console.log("Lados del triangulo miden: " + 
    ladotriangulo1 + "cm, ", ladotriangulo2 
    + "cm, y la base " + basetriangulo + "cm");*/

//console.log("La altura del triangulo es " + alturatriangulo + "cm");

//const perimetroTraingulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
function perimetroTraingulo(lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
}
//console.log("El perimetro del triangulo es: " + perimetroTraingulo + "cm");

//const areaTriangulo = (basetriangulo * alturatriangulo) / 2
function areaTriangulo(base, altura){
    return (base * altura) / 2; 
}
//console.log("El área del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();


// Codigo del circulo
console.group("Circulo");
const radioCirculo = 4;
//const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;
const PIMath = Math.PI;

//const perimetroCirculo = diametroCirculo * PIMath;
//const areaCirculo = (radioCirculo * radioCirculo) * PIMath;
//console.log("El radio del circulo es: " + radioCirculo + "cm");
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
//console.log("El area del circulo es: " + areaCirculo + "cm2");

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PIMath;
}

function areaCirculo(radio){    
    return (radio * radio) * PIMath;
}

console.groupEnd();




//aqui interactuamos con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area del cuadrado es: " + area + "cm2")
}

function calcularPerimetroTriangulo(){
    const inputBase = document.getElementById("inputBaseTriangulo");
    const base = inputBase.value;
    const inputLado1 = document.getElementById("inputLado1Triangulo");
    const lado1 = inputLado1.value;
    const inputLado2 = document.getElementById("inputLado2Triangulo");
    const lado2 = inputLado2.value;

    const perimetro = perimetroTraingulo(lado1, lado2, base);
    alert("El perimetro del triangulo es: " + perimetro)
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputBaseTriangulo");
    const base = inputBase.value;
    const inputAltura = document.getElementById("inputAlturaTriangulo");
    const altura = inputAltura.value;

    const area = areaTriangulo(base, altura);
    alert("El area del triangulo es: " + area)
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro)
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El area del circulo es: " + area + "cm2")
}