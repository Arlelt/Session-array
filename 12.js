const readline = require('prompt-sync')();

function segundoMaiorNumero (array) {
    let a = Number.MIN_VALUE;
    let b = Number.MIN_VALUE;
    for (let item of array) {
        if (item > a) 
            a = item;
    }

    for (let item of array) {
        if (b < item && item < a)
            b = item;
    }
    return b;
}

function main () {
    try {
        console.log("Passe quantos valores do Array: ");
        let a = Number(readline());
        let numero = [a];
        console.log('passe os valores do array');
        for(let i = 0; i<a; i++){
            numero[i]= Number(readline());            
        }
        let b = segundoMaiorNumero(numero);
        console.log(`O segundo maior número é ${b}`);
    }
    catch (err){
        console.log(err.message);
    }
}

main();