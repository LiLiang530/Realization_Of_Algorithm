/*
用法：每调用一次生成一个质数
console.log(getPrime())  // 2
console.log(getPrime())  // 3
console.log(getPrime())  // 5
console.log(getPrime())  // 7
*/


function f() {
    let primeArr = []
    return () => {
        if(primeArr.length === 0) {
            primeArr.push(2)
            return 2
        }
        let ifFind = true
        let num = primeArr[primeArr.length - 1]
        while(ifFind) {
            let ifPrime = true
            for(let i = 0; i < primeArr.length; i ++) {
                if(num % primeArr[i] === 0){
                    ifPrime = false
                    break
                }
            }
            if(ifPrime) {
                ifFind = false
                primeArr.push(num)
            }
            num += 1
        }
        return primeArr[primeArr.length - 1]
    }
}
const getPrime = f()
