function estaOrdenado(nuns) {
    for(let i = 1; i <= nuns.length-1; i++){
        if(nuns[i] - nuns[i -1] <= 0 ){
            return console.log("não está ordenado")
        }
    }
    return console.log("está ordenado")
}

console.log(estaOrdenado([1,2,3,4,5,6]))
console.log(estaOrdenado([1,7,3,95,6]))
