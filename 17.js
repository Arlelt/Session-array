const readline = require ('prompt-sync') ();

function inverterPosicao (array, from, to) {
    let b = Number.MAX_VALUE;
    for (let item of array) {
        if (item < b)
            b= item
            console.log(array.splice(to, 0, array.splice(from, array.indexOf(item)) [0]))
            
    }
    return array;

}

console.log(inverterPosicao([123, 45, 1, 0, 57, 48]))