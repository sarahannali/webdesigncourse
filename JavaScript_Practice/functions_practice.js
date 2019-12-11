function isEven(num) {
    return num % 2 === 0
}

console.log(isEven(2))
console.log(isEven(5))

function factorial(num) {
    ans = 1
    for (var i = 1; i <= num; i++) {
        ans = ans * i
    }
    return ans
}

console.log(factorial(10))
console.log(factorial(0))

function kebabToSnake(str) {
    return str.replace(/-/g, "_")
}

console.log(kebabToSnake("hello-world"))