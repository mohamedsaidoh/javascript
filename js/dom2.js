{
    function validateinput(){
        let myinput = document.getElementById("numb");

        let user_value=myinput.value

        if(isNaN(user_value)|| !(user_value>= 1 && user_value <=10)){
            alert("wrong input")
        }else{
            alert("correct")
        }
    }
}
{
    function changestyle(){
        const thepar=document.getElementById("demo")
        thepar.style.backgroundColor="blue"
    }
}
{
    function changetouppercase(){
        let myinput = document.getElementById("numb");
        myinput.value =myinput.value.toUpperCase()
    }
}