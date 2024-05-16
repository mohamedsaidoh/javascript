{
    const person1={
        Name:"saido",
        country:"kenya",
        age:"20",
    }
    const person2={
        Name:"naima",
        country:"somalia",
        Age:"20",
    }
    console.log(person1.Name)
    console.log(person2.age)
}
{  
    const person ={
        fname:"mascuud",
        lname:"moha",
        yob:"2004",
        fullname: function(){
            console.log(this.fname+" "+this.lname)
        },
        age:function( ){
            return 2024-this.yob

        }
            
        
    }
    console.log(person.age(2024))
}
{
    
}