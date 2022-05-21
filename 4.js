const readline = require('prompt-sync')();
function sequenciaArrray (limite){
    let arrai = [];
    for(let i = 0; i<limite; i++){
        arrai[i] = i+1;
    }
    return arrai;
}
function main(){
    try{
        process.stdout.write("Digite o valor do Array: ");
        let limite = Number(readline());
        let x = sequenciaArrray(limite);
        console.log(x);
    }
    catch(err){
        console.log(err.message);
    }
}

main();