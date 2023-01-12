

const loginFunction = async() => {
    event.preventDefault();
    const loginObj = {
        username : document.querySelector("#username").value,
        password : document.querySelector("#password").value
    }
    try {
        const result  = await fetch("http://localhost:4500/user/login",{
            method:"POST",
            body : JSON.stringify(loginObj),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await result.json();
        alert(data.message , data.token);
        window.location.href = "index.html";
    } catch (error) {
        console.log("error is : " , error);
        alert(error);
    }
    
}
document.querySelector("form").addEventListener("submit",loginFunction);