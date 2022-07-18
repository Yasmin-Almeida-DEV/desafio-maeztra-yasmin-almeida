function estaOrdenado(nuns) {
    for(let i = 1; i <= nuns.length-1; i++){
        if(nuns[i] - nuns[i - 1] <= 0 ){
            console.log(nuns[i])
            console.log(nuns[i - 1])
            // compara se o numero anterior menos o atual é igual a 0
            return console.log("não está ordenado")
        }
    }
    return console.log("está ordenado")
}

console.log(estaOrdenado([2,1]))
console.log(estaOrdenado([1,2]))
