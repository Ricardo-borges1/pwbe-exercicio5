const calcularParesOuImpares = function(inicial, final) {
    let valorInicial = inicial;
    let valorFinal = final;
    valorFinal = Number(valorFinal);
    valorInicial = Number(valorInicial);
    let numerosPares = [];
    let numerosImpares = [];
    let contador = 0;
    
    if (valorFinal === '' || valorInicial === '') {
        console.log('ERRO: É obrigatória a digitação de todos os valores.');
    } else if (isNaN(valorFinal) || isNaN(valorInicial)) {
        console.log('ERRO: É obrigatória a digitação somente de valores numéricos.');
    } else if (valorInicial < 0 || valorInicial > 500) {
        console.log('ERRO: O valor inicial deve estar entre 0 e 500.');
    } else if (valorFinal < 100 || valorFinal > 1000) {
        console.log('ERRO: O valor final deve estar entre 100 e 1000.');
    } else if (valorInicial === valorFinal) {
        console.log('ERRO: Os valores não podem ser iguais.');
    } else if (valorInicial > valorFinal) {
        console.log('ERRO: O valor inicial não pode ser maior do que o valor final.');
    } else {
        console.log('\nNÚMEROS PARES:');
        for (let p = valorInicial; p <= valorFinal; p++) {
            if (p % 2 === 0) {
                numerosPares[contador] = p;
                console.log(numerosPares[contador]);
            }
            contador++;
        }
        
        contador = 0;
        console.log('\nNÚMEROS ÍMPARES:');
        for (let p = valorInicial; p <= valorFinal; p++) {
            if (p % 2 !== 0) {
                numerosImpares[contador] = p;
                console.log(numerosImpares[contador]);
            }
            contador++;
        }
        
        console.log(`Quantidade de números pares: ${numerosPares.length}`);
        return `Quantidade de números ímpares: ${numerosImpares.length}`;
    }
};

module.exports = {
    calcularParesOuImpares
};