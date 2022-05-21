const readline = require('prompt-sync')();

function SequenciaContraria (limite){
    let a = [limite];
    let b= 0;
    for(let i = limite-1; i >=0; i--){
        a[b] = i;
        b++;
    }
    return a;
}
function printarArray (numero){
    for(let item of numero){
        process.stdout.write(`${item} `);
    }
}

function main(){
    try{
        console.log("Passe o valor do limite array: ");
        let limite = Number(readline());

        let a = SequenciaContraria(limite);
        printarArray(a);
    }
    catch(err){
        console.log(err.message);
    }
}
main();