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
    // Calculadora de IVA
    let precio = await input("Introduzca el precio del producto: ");
    precio = parseFloat(precio);
    let iva = await input("Introduzca el IVA del producto: ");
    let operacion = (precio * iva / 100);
    let suma = (precio + operacion);
    
    // IMPRIMIR   
    console.log("Valor sin Iva: " + precio);
    console.log("IVA: " + operacion);
    console.log("TOTAL A PAGAR: " + (suma));

    rli.close();
};

main();
