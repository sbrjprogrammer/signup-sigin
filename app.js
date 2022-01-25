
function signup(){
    var data = localStorage.getItem('userData');
    var userEmail = document.getElementById('email').value
    var userPassword = document.getElementById('password').value
    var flagUser=false;

    var obj ={
        userEmail,
        userPassword
    }

    if((!data)){
        console.log("welcome developers")

    localStorage.setItem("userData",JSON.stringify([obj]))
    }else{
        var usersData = JSON.parse(data);
            for(var i = 0;i<usersData.length;i++){
                if(userEmail == usersData[i].userEmail){
                    alert("Email Address already exist");
                    flagUser=true
                }
            }
            if(!flagUser){
                usersData.push(obj);
                localStorage.setItem("userData",JSON.stringify(usersData))
            }
    }
}





const signin = ()=>{
    var flag = false
    var data = localStorage.getItem('userData');
    var usersData = JSON.parse(data);
    console.log(data)
    var userEmail = document.getElementById('email').value
    var userPassword = document.getElementById('password').value
    
        for(var i=0; i<=usersData.length; i++){
            if(userEmail===usersData[i].userEmail & userPassword===usersData[i].userPassword){
                alert("welcome to our website")
                flag = true
            }
            
        }if(flag===false){
                alert("please register your acount")
            }


    // data.forEach((e,i) => {
       
        
        
    // });
}