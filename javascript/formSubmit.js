document.getElementById("pledgeForm").addEventListener("submit", (e) => {

    // make sure it doesnt refresh 
    e.preventDefault();

    // retrieving the elements
    let userName = document.getElementById("nameInput");
    let email = document.getElementById("emailInput");
    let pledge = document.getElementById("pledgeText");
    let actions = document.getElementById("actionList");
    let tnc = document.getElementById("tnc");
    let receiveCopy = document.getElementById("emailResponse");
    let receiveEmailText = "";
    
    // function to make the modal show if input is wrong
    const showModal = (message, isSuccess=false) => {
        const messageModal = document.getElementById("modalMessage")
        if (isSuccess) {
            modalMessage.innerHTML = `
                <img src="../images/thankyoumsg.jpg" class="img-fluid">
                <p class="fs-5">${message}</p>
                <form class="fw-medium">
                    <label class="form-label d-block fs-5">Tell us how we can improve:</label>
                    <div class="input-group">
                        <textarea class="form-control"></textarea>
                    </div>
                </form>
                `
        } else {
            modalMessage.innerHTML = `<p>${message}</p>`
        }
        const errorModal = new bootstrap.Modal(document.getElementById("errorModal"))
        errorModal.show()
    } 
    document.getElementById("modalHeader").className = "modal-header bg-danger text-white"
    document.getElementById("errorModalLabel").innerText = "Form Error"

    // input validation for name
    if (userName.value.trim() === "") {
        showModal("Please enter your name");
        userName.focus();
        return;
    }

    // input validation for email
    if (email.value.trim() === "" || !email.checkValidity()) {
        showModal("Please enter a valid email");
        email.focus();
        return;
    }

    // input validation for pledge
    if (pledge.value.trim() === "") {
        showModal("Share your pledge to show your commitment to fighting climate change.");
        pledge.focus();
        return;
    }

    // input validation for action
    if (actions.children.length === 0){
        showModal("Please list at least one action you will take to fight climate change");
        document.getElementById("actionBox").focus()
        return
    }

    // ensure terms and conditions are checked
    if (!tnc.checked) {
        showModal("Please agree to the terms and conditions before submitting")
        tnc.focus();
        return;
    }

    // if user wants to receive a copy of their response, add this message
    if (emailResponse.checked) {
        receiveEmailText = `A copy of your response will be emailed to ${email.value.trim()}. Do check the spam tab if you cannot find it.`
    }

    // all input valid show thank you message
    document.getElementById("modalHeader").className = "modal-header bg-success text-white"
    document.getElementById("errorModalLabel").innerText = "Thank you"
    showModal(`Hello ${userName.value.trim()}, thank you for pledging your effort to help fight climate change. Every small steps count. ${receiveEmailText}`, true)
    actions.innerHTML ="";
    document.getElementById("pledgeForm").reset()
});

