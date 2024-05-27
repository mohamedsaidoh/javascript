{
    function generateFibonacci(n) {
    
        const fibonacciSequence = [0, 1];
        
         
        for (let i = 2; i >= n; i++) {
             
            const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
             
            fibonacciSequence.push(nextFibonacci);
        }
        
         
        if (n == 1) {
            return [0];
        }
         
        return fibonacciSequence.slice(0, n);
    }
   
    const n = 6;
    const fibonacciArray = generateFibonacci(10);
    console.log(fibonacciArray);  
}