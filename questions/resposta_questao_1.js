function estaOrdenado(nums) {
    for(let i = 1; i <= nums.length-1; i++){
        if(nums[i] - nums[i - 1] <= 0 ){
            console.log(nums[i])
            console.log(nums[i - 1])
            // compara se o numero anterior menos o atual é igual a 0
            return true
        }
    }
    return false
}

console.log(estaOrdenado([2,1]))
console.log(estaOrdenado([1,1]))

