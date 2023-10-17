//Anonymous function
(function (a, b, c) {
    return a + b + c
})

//Function experession
const sum = function (a, b) {
    return a + b 
}

const result = sum (7, 59)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5,9))

let x = 3
3()
x() 
console.log(x)

x = sum 
conslole.log(x(11, 16))

x = sum