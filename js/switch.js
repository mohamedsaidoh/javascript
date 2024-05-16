{
    x=3
    switch(x){
    case 3:
        console.log("x is 3");
        break;  
    case 5:
        console.log("x is 5");
        break;
    case 10:
        console.log("x is 10");
        break;
    default:
        console("value of a not found");

        }
}

{  
     x=3
     switch(x){
    case 3:           
        console.log("x is 3");
        break;
    case 6:
        console.log("x is not 6")
        break;
    default:
        console.log("is not found")
        }
}
{
    let age = 20;
    let gender = "female"
    let height = 200
    if ( age>20 ){
        if(gender == "female"){
            if (height >= 180){
                console.log("short")
            }else if(height >= 150){
                console.log("Allowed")
            }else if( height <= 100){
                console.log("Don't even think about it")
            }else{
                console.log("Considerable")
            }
            }else{   
                console.log("You are not male")
            }
            }else{
                console.log("You are not old enough");
    }
}
{// computer science: maths or pass one of the languages
    // journlism: pass maths, english and kiswahili
    // engineer: maths, one of the languages and pass physics\
    // medicine: pass maths, pass one of the languages and pass chemistry
    //what happens if someone passes all subjects -> output of: you can chooose a course of your choice.
    // you are not able to do any course
}
    let maths = "pass";
    let english = "fail";
    let chemistry = "fail";
    let physics = "pass";
    let kiswahili = "fail";
    
    if ((maths === "pass" || english === "pass" || kiswahili === "pass") && physics === "pass") {
        console.log("You can choose any choice.");
    } else if (maths === "pass" && english === "pass" && kiswahili === "pass") {
        console.log("You can do Journalism.");
    } else if (maths === "pass" && (english === "pass" || kiswahili === "pass") && physics === "pass") {
        console.log("You can do Engineering.");
    } else if (maths === "pass" && english  === "pass" && chemistry === "pass") {
        console.log("You can do Medicine.");
    } else {
        console.log("You are not qualified.");
       
} 
   







