var sandwich = 0

console.log(sandwich)

function test(arg){
    window[arg]++;
}

test("sandwich")

console.log(sandwich)