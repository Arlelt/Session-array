const readline = require('prompt-sync') ();

function sequenciaArrray (inicio,fim){
    let arrai = [fim-inicio +1];
    let falso = 0;
    for(let i = inicio; i<=fim; i++){
        arrai[falso] = i;
        falso++;
    }
    return arrai
}

function main(){
    try{
        process.stdout.write("Digite o valor do Array: ");
        let a= Number(readline());
        let b = Number(readline());
        let x = sequenciaArrray(a,b);
        console.log(x);
    }
    catch(err){
        console.log(err.message);
    }
}

main();

