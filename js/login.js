document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // user password field
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == 'ezabul.bary@gmail.com' && userPassword == 'shakil'){
        window.location.href = 'banking.html';
    }
})