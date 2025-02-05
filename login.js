const API_URL="http://localhost:8000";
async function register() {
    const email=document.querySelector("input[placeholder='E-mail']").value;
    const password=document.querySelector("input[placeholder='password']").value;
    
    
    if(password!==confirm_password){
        alert("Passwords do not match")
        return;
    }

    const response=await fetch(`${API_URL}/register`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({email,username,})
});
    
    const data=await response.json();
    if(data.message){
        alert("Login successful!!");
        
    }
    else{
        alert(data.error);
    }
    
}