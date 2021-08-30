function validate() {
    var name = document.querySelector("#name").value;
    var subject = document.querySelector("#subject").value;
    var service = document.querySelector("#services").value;
    var phone = document.querySelector("#phone").value;
    var email = document.querySelector("#email").value;
    var message = document.querySelector("#message").value;
    var error_message = document.querySelector("#error_message");

    error_message.style.padding = "15px";

    var text;
    if (name.length <= 3) {
        text = "Please Enter Valid Name";
        error_message.innerText = text;
        return false;
    }
    if (subject.length <= 1) {
        text = "Please Enter Correct Subject";
        error_message.innerText = text;
        return false;
    }
    if (service = ' ') {
        text = "Good Day Sir / Madam \n\nHow Can I Help You? \n\nPlease Enter Thy Required Service";
        error_message.innerText = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
        text = "Please Enter Valid Phone Number";
        error_message.innerText = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerText = text;
        return false;
    }
    if (message.length <= 70) {
        text = "Please Enter More Than 70 Characters";
        error_message.innerText = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}