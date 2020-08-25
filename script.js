let form = document.getElementsByTagName("form")[0];
let statusMessages = document.querySelectorAll(".statusMessage");


form.addEventListener("submit", function(event){
    event.preventDefault();

    let formInputs = form.getElementsByTagName("input");
    for (let i = 0; i < statusMessages.length; i++) {
        let message = statusMessages[i];
        message.innerText = "";
    }
    for (let i = 0; i < formInputs.length; i++) {
        let input = formInputs[i];
        input.style.borderColor = "black";
        if (input.value == "") {
            statusMessages[i].innerText = "You have to fill in the " + input.name;
            input.style.borderColor = "red";
        }
    }
})