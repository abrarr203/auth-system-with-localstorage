document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    for(let i = 0; i < localStorage.length; i++){
        const user = JSON.parse(localStorage.getItem(i));
        if(user.email== email  && user.password == password){
            console.log('Login successful!')
            break;
        }
    }
});
