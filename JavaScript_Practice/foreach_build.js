function myForEach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

myForEach([1, 2, 3], function (num) {
    ans = num + 1
    return alert(ans)
})