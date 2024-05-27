

{
    const numbers = [56, 78, 89, 90]
    // for (let i in numbers){
    //     console.log(numbers[i])
    // }
    // for (let number of numbers){
    //     console.log(number)
    // }
    //function to get the sum of elements in an array
    function getSum(arr){
        sum = 0
        for (let i of arr){
            sum = sum + i
        }
        return sum;
    }
   console.log(getSum(numbers))
}
{
function findMaxUsingForOf(arr) {
    let max = -Infinity;
    for (let value of arr) {
        if (value > max) {
            max = value;
        }
    }
    return max;
}
const numbers = [56, 78, 89, 90];
console.log(findMaxUsingForOf(numbers));
}

{
    const arr=[89,89,76,54,346,89]
    let x =0;
    while(x<arr.length){
        console.log(arr[x]);
        x++;
    }
}
{
    const arr = [89, 89, 76, 54, 346, 89];
let x = 0;
let sum = 0;

while (x < arr.length) {
    console.log(arr[x]);
    sum += arr[x];
    x++;
}

console.log('Sum:', sum);
}
{
    x=10
    do{
console.log("hello world")
x++
    }while(x<10)
        console.log(x)
}
{
    
}