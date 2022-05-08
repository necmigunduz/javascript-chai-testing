function replaceWith(str, l, r) {
    let split = str.split('')
    for(let i=0;i<split.length; i++){
        if(split[i] === l){
            split[i] = r
        }
    }
    return split.join('')
}

function expand(original, r){
    return [].concat(... new Array(r).fill([...original]));
} 

function acceptNumbersOnly(...args){
    let non_num = []
    for(let i=0; i<[...args].length;i++){
        if(isNaN([...args][i])){
            non_num.push([...args][i])
        }
    }
    if(non_num.length === 0) return true
    return false
}

function mergeArrays(arr1,arr2){
    return arr1.concat(arr2).sort()
}

function mergeObjects(obj1, obj2){
    let obj = {
        ...obj1,
        ...obj2
    }
    return obj
}