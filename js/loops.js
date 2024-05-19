//  
//write a function that prints values from 0 to n
//the function should take an integer n as it's parameter and uses a for loop to print all the number from
{
    function printvalue(n){
        for (let i = 0; i <= n; i+=2){
          console.log(i);
        }
    }; 
      printvalue(10);
}
{
function printReverse(n) {
    for (let i = n; i >= 0; i=-2) {
        console.log(i);
    }
}
printReverse(30);
}
//write a function that only that only prints multiples of 5 and 10 from 0 to n
{
function divisibleby5 (n){
    for (let i = 0; i <= n; i++) {
        if (i % 5 === 0 || i % 10 === 0) {
            console.log(i);
        }
    }
}
divisibleby5 (100);
}
{
    function calculateExponential(a, e) {
        // Calculate the result of a raised to the power of e
        let result = Math.pow(a, e);
        
        // Multiply the result by 3.4
        result *= 3.4;
        
        // Return the final result
        return result;
    }
    
    // Example usage:
    let a = 3;
    let e = 4;
    let finalResult = calculateExponential(a, e);
    console.log(finalResult); // Output will be (3^4) * 3.4 
}
{
    function getPower(a, e){
        let prod = 1;
        for(let i = 1; i <= e; i++){
            prod = prod * a;
        }
        return prod;
    }
    console.log(getPower(5, 3))
}
{
const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
// arrays
// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }
// // print the values of the array backwards
// for (let i = numbers.length-1; i >= 0; i--){
//     console.log(numbers[i])
// }
// get the sum of all
function getSumInArray(){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i]
    }
    return sum;
}
// function to only sum up even numbers and return the sum of the even numbers in that array.
function getSumEvenInArray(){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            sum = sum + numbers[i];
        }
    }
    return sum
}
// get the smallest number in the array
function getLeast(){
    let currentSmallest = numbers[0]
    for (let i = 0; i < numbers.length; i ++){
        if(numbers[i] < currentSmallest){
            currentSmallest = numbers[i];
        }
    }
    return currentSmallest;
}
console.log(getLeast())
}







