const readline = require ('prompt-sync') ();

function sequenciaArrray (limite) {
    let a = [limite];
    let x = 0;
    for (let i = limite; i>0; i--) {
        a[x] = i;
        x++;
    }

    return a;
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