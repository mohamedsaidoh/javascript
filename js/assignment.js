{
    const studentSubjects = {
        Maths: "pass",
        English: "pass",
        Chemistry: "fail",
        Physics: "pass",
        Kiswahili: "pass",
        History: "pass",
        Geography: "fail"
    };  
function passed(subjectGrade) {
    return subjectGrade === "pass";
}
function checkCoursequalified(subjects) {
    const { Maths, English, Chemistry, Physics, Kiswahili, History, Geography } = subjects;

    const canChoosecomputerScience = passed(Maths) && (passed(Physics) || passed(Chemistry)) && (passed(English) || passed(Kiswahili));
    const canChooseJournalism = passed(Maths) && passed(English) && passed(Kiswahili) && (passed(History) || passed(Geography));
    const canChooseEngineering = passed(Maths) && (passed(Physics) || passed(Chemistry)) && (passed(English) || passed(Kiswahili)) && (passed(History) || passed(Geography));
    const canChooseMedicine = passed(Maths) && passed(Chemistry) && (passed(English) || passed(Kiswahili)) && (passed(History) || passed(Geography));

    if (canChoosecomputerScience) {
        return "You can qualified for Compute Science";
    } else if (canChooseJournalism) {
        return "You can qualified for Journalism";
    } else if (canChooseEngineering) {
        return "You can qualified for Engineering";
    } else if (canChooseMedicine) {
        return "You can qualified for Medicine";
    } else {
        return "You have not qualified for any of the courses";
    }

const eligibilityMessage = checkCourseforqualification(studentSubjects);
console.log(eligibilityMessage);
}
}
{

function sumNumbersFromN(number){
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum; 
}


const n = 5;
const result = sumNumbersFromN(n);

console.log(`The sum of numbers from 1 to ${n} is:`, result);
}
