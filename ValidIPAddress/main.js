alert("Javascript Working!!");

function myFunction() {
    let userInput = document.querySelector("#myIp");
    let message = document.querySelector("#message");
    
    message.innerHTML = userInput.value;
    
}

