const readline = require('prompt-sync')();

function mediaNumeros (array) {
    let a = 0;
    let b = 0;
    for (let item of array) {
        a= a + item;
        b++;
    }

    let x = a/b;
    return x;
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
        let b = mediaNumeros(numero);
        console.log(`A média dos elementos é ${b}`);
    }
    catch (err){
        console.log(err.message);
    }
}

main();