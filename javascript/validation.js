
register = () =>{
    //alert("ok");
    var formStatus = true;
    /* full name Validation Start here */
    var name = document.getElementById("fname").value.trim(); //trim() function left right space in name
    if(name==""){
        formStatus = false;
        document.getElementById("fname").style.border = "2px solid red";
        document.getElementById("nameerror").innerText = "Invalid Name !";
    }else{
        document.getElementById("fname").style.border = "2px solid green";
        document.getElementById("nameerror").innerText = "";
    }

    /* Age Validation start here */
    var age = document.getElementById("age").value.trim();
    if(age==""){
        formStatus = false;
        document.getElementById("age").style.border = "2px solid red";
        document.getElementById("ageerror").innerText = "Invalid Age !";
    }else{
        document.getElementById("age").style.border = "2px solid green";
        document.getElementById("ageerror").innerText = "";
    }

    /* Education Validation start here */
    var edu = document.getElementById("edu").value.trim();
    if(edu==""){
        formStatus = false;
        document.getElementById("edu").style.border = "2px solid red";
        document.getElementById("eduerror").innerText = "Invalid Degree !";
    }else{
        document.getElementById("edu").style.border = "2px solid green";
        document.getElementById("eduerror").innerText = "";
    }

    /* Marks Validation start here */
    var marks = document.getElementById("marks").value.trim();
    if(marks==""){
        formStatus = false;
        document.getElementById("marks").style.border = "2px solid red";
        document.getElementById("markserror").innerText = "Invalid Marks !";
    }else{
        document.getElementById("marks").style.border = "2px solid green";
        document.getElementById("markserror").innerText = "";
    }

    /* Gender Validation start here */
    var gender = document.getElementById("male").value.trim();
    if(gender==""){
        formStatus = false;
        document.getElementById("gender").style.border = "2px solid red";
        document.getElementById("markserror").innerText = "Invalid Gender !";
    }else{
        document.getElementById("gender").style.border = "2px solid green";
        document.getElementById("markserror").innerText = "";
    }

    /* Address Validation start here */
    var male = document.getElementById("male").checked == true;
    var male = document.getElementById("male").checked == true;
    if(address==""){
        formStatus = false;
        document.getElementById("address").style.border = "2px solid red";
        document.getElementById("addresserror").innerText = "Invalid Address !";
    }


    /* Do not write anything after this line, this is for final action*/
    if(formStatus==true){
        //alert("All is well ! i am going");
        document.getElementById("message").innerText = "Please Wait Processing....";
        document.getElementById("myform").submit();
    }else{
        //alert("Some inputs are Invaild , Please Check !");
        document.getElementById("message").innerText = "Invaild input !";

    }
}