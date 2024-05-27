{
    function isPalindrome(str) {
        // Convert the string to lowercase to make the check case-insensitive
        str = str.toLowerCase();
        // Remove any non-alphanumeric characters from the string
        str = str.replace(/[^a-z0-9]/g, '');
        // Check if the cleaned string is equal to its reverse
        return str === str.split('').reverse().join('');
    }
    
    // Example usage:
    console.log(isPalindrome("dad")); // Output: true
    console.log(isPalindrome("Dad")); // Output: true (case insensitive)
    console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true (ignores spaces and punctuation)
    console.log(isPalindrome("hello")); // Output: false 
}
{
    function drawTriangle(rows) {
        for (let i = 1; i <= rows; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) {
                row += j;
            }
            console.log(row);
        }
    }
    
    // Example usage:
    drawTriangle(10);
}