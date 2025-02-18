/*
Javascript 的 Array.flat() 方法实现(递归方式)

input: [[1],[2,[3],4,[[5],6],7],8]
output: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
*/

function flat(arr){
    let out = [];
    while(arr.length > 0){
        let num = getFirst(arr)
        if(typeof num === 'number'){
            out.push(num)
        }
    }
    console.log(out)
}

function getFirst(arr){
    if(typeof arr === 'object'){
        if(typeof arr[0] === 'number'){
            return arr.shift()
        }else{
            if(arr.length > 0){
                if(arr[0].length === 0){
                    arr.shift()
                    return getFirst(arr)
                }else{
                    return getFirst(arr[0])
                }
            }
        }
    }
}
