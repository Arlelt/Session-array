const readline = require('prompt-sync')();

function maiorNumero (array) {
    let a = -2;
    for (let item of array) {
        if (item > a) 
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
        let b = maiorNumero(numero);
        console.log(`O maior número é ${b}`);
    }
    catch (err){
        console.log(err.message);
    }
}

main();