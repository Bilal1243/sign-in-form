function valid() {
    let username = document.getElementById("name");
    let useremail = document.getElementById("email");
    let usernumber = document.getElementById("number");
    let userpassword = document.getElementById("password");
    let repassword = document.getElementById("re-entered-pass");


    if (username.value == "") {
        alert("please complete the form");
        document.myForm.name.focus();
        return false;
    }
    if (useremail.value == "") {
        alert("please complete the form");
        document.myForm.email.focus();
        return false;
    }
    if (usernumber.value == "") {
        alert("please complete the form");
        document.myForm.number.focus();
        return false;
    }
    if (userpassword.value == "") {
        alert("please complete the form");
        document.myForm.password.focus();
        return false;
    }
    if (repassword.value == "") {
        alert("please complete the form");
        document.myForm.re-entered-pass.focus();
        return false;
    }
    if (repassword.value != userpassword.value) {
        alert("enter correct password");
        document.myForm.re-entered-pass.focus();
        return false;
    }
    return true;
}
