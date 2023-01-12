

const signUp = async (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let DOB = document.querySelector("#DOB").value;
    let location = document.querySelector("#location").value;
    let password = document.querySelector("#password").value;
    let conpass = document.querySelector("#conPass").value;
    
    if(password === conpass){
        console.log("in the if conditon....");
        let signUpobj = {
            username,email,DOB,location,password,isAdmin:false
        }
        try {
            let result = await fetch("http://localhost:4500/user/register",{
                method: "POST",
                body: JSON.stringify(signUpobj),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            let data = await result.json();
            // data = JSON.parse(data);
            console.log(data);
            alert(data.message);
            window.location.href = "login.html";
        } catch (error) {
            console.log(error);
        }
        
    }else{
        alert("password and confirmation password is not matching.")
    }
}
document.querySelector("form").addEventListener("submit" , signUp);