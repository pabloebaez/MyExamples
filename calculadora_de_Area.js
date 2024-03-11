const rli = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(prompt) {
    return new Promise((callbackFn, errorFn) => {
        rli.question(prompt, (uinput)=> {
            callbackFn(uinput);
        }, ()=> {
            errorFn();
        });
    });
}

const main = async () => {
    // Calculadora de AREAS CUADRADO
    let ladoA = await input("Introduzca la medida del Frente: ");
    ladoA = parseFloat(ladoA);
    let ladoB = await input("Introduzca la medida de Atras: ");
    ladoB = parseFloat(ladoB);
    let lado1 = await input("Introduzca la medida de Fondo Izquierdo: ");
    lado1 = parseFloat(lado1);
    let lado2 = await input("Introduzca la medida de Fondo Derecho: ");
    lado2 = parseFloat(lado2);
    // Dividir en rectangulo
    if (lado1 > lado2) {
        var calculoRectangulo = ladoA * lado1;
    } else {
        var calculoRectangulo = ladoA * lado2;
    }
    
    // Calcular Triangulo
    if(lado1 > lado2) {
        var diferenciaFondo = lado2 - lado1;
    } else {
        var diferenciaFondo = lado1 - lado2;
    }
    
    console.log("XXX: " + diferenciaFondo)
    let calculaTriangulo = ladoA * diferenciaFondo /2;
    // TOTAL AREA
    let totalArea = calculaTriangulo + calculoRectangulo;
    
    // IMPRIMIR   

    console.log("TOTAL DE AREA: " + (totalArea));

    rli.close();
};

main();
