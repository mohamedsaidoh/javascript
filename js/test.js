{
    function isPrime(n) {
        if (n < 2) {
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0){
            }
        }
    }
    console.log(isPrime(4));
    console.log(isPrime(5));
    console.log(isPrime(6));
    console.log(isPrime(19));
    console.log(isPrime(22));
    console.log(isPrime(23));
}
{
    function drawTriangle(rows) {
        for (let i = 1; i <= rows; i++){
            let row = '';
            for (let j = rows; j > i; j--) {
                row += '   ';
            }
            for (let k = 1; k <= 2 * i - 1; k++) {
                row += k;
                if (k < 2 * i - 1) {
                    row += k % 2 === 0 ?'  ':'  ';
                }
            }
            console.log(row);
        }
    }
    
    drawrightangel(10); 
}
