alert("Javascript Working!!");

function myIp() {
    let emptyIp = document.getElementById("myIP").value;
    let checkInputIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/     
    if((checkInputIp.test(emptyIp))) {
        alert("Valid ip");
        message.innerHTML = checkInputIp.value; // no clue why it doesnt show in web browser if i take out value shows regex function but why
                                                // regex function is created wrong and handled wrong?
    }
    else {
        alert("Inva;id ip");
    }
}
