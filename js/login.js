// login section
document.getElementById('login-submit').addEventListener('click', function () {
    //Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'mahadi445541@gmail.com' && userPassword == 'secret') {
        window.location.href = 'another-bankpage.html';
    }

});


