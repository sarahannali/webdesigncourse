function printReverse(givenList) {
    var result = []
    givenList.forEach(function (item) {
        result.unshift(item)
    })
    return result
}

function isUniform(givenList) {
    var firstElement = givenList[0]
    var ans = 0
    givenList.forEach(function (element) {
        if (element !== firstElement) {
            ans += 1
        }
    })
    return ans === 0
}

function sumArray(givenList) {
    var ans = 0
    givenList.forEach(function (x) {
        ans += x
    })
    return ans
}

function max(givenList) {
    var ans = 0
    givenList.forEach(function (item) {
        if (item > ans) {
            ans = item
        }
    })
    return ans
}

console.log(printReverse([1, 2, 3, 4]))
console.log(isUniform([1, 1, 1, 1]))
console.log(isUniform([2, 1, 1, 1]))
console.log(sumArray([-5, 100]))
console.log(max([10, 6, 7, 10]))