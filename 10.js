const readline = require('prompt-sync')();

function somarNumeros (array) {
    let a = 0;
    for (let item of array) {
        a= a + item;
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
        let b = somarNumeros(numero);
        console.log(`A soma dos elementos é ${b}`);
    }
    catch (err){
        console.log(err.message);
    }
}

main();