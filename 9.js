const readline = require('prompt-sync')();

function menorNumero (array) {
    let a = Number.MAX_VALUE;
    for (let item of array) {
        if (item < a)
            a = item;
    }
    return a;
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
        let b = menorNumero(numero);
        console.log(`O menor número é ${b}`);
    }
    catch (err){
        console.log(err.message);
    }
}

main();