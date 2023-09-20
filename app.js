const calcularParesImpares = require('./module/CalcularParesImpares');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor inicial: ', (valorInicialUsuario) => {
    const valorInicial = valorInicialUsuario;
    rl.question('Digite o valor final: ', (valorFinalUsuario) => {
        const valorFinal = valorFinalUsuario;
        console.log(calcularParesImpares.calcularParesOuImpares(valorInicial, valorFinal));
        rl.close();
    });
});