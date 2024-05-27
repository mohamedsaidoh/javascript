{
  function fizzBuzz(n){
    for (let i = 0; i <= n; i++){
        if (i % 3 === 0 && i % 7 === 0){
            console.log("fizzBuzz");
        } else if (i % 3 === 0){
            console.log("fizz");
        } else if (i % 7 === 0){
            console.log("buzz");
        } else{
            console.log(i);
        }
    }
}
fizzBuzz(21);
}



{
    function countVowels(str) {
        str = str.toLowerCase();
        let count = 0;
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        for (let char of str) {
            if (vowels.includes(char)) {
                count++;
            }
        }
        return count;
    }
    console.log(countVowels("ZINDUAZINDUA"));
}




{
    function calculateAverageMarks(students) {
        students.forEach(student => {
            const averageMarks = student.marks.reduce((sum, mark) => sum + mark, 0) / student.marks.length;
            student.averageMarks = averageMarks;
        });
        students.sort((a, b) => b.averageMarks - a.averageMarks);
        students.forEach(student => {
            console.log(`${student.name}: ${student.averageMarks}`);
        });
    }
    const arrayOfStudents = [
        {name: "saido", marks: [45, 78, 90, 32, 67]},
        {name: "abdullahi", marks: [89, 78, 10, 67, 47]},
        {name: "naima", marks: [55, 88, 94, 52, 37]},
        {name: "kelvin", marks: [44, 68, 88, 62, 77]}
    ];
    calculateAverageMarks(arrayOfStudents);{
}
