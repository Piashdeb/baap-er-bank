document.getElementById('login-submit').addEventListener('click', function () {
    // get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password

    const passwordField = document.getElementById('user-password');
    userPassword = passwordField.value;

    // Check email & password

    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
});


