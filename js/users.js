
    document.getElementById('reg-form').addEventListener('submit', function (event) {
        event.preventDefault(); 
        
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;
    
        const user = {
            fullName: fullName,
            email: email,
            password: password
        }
    
        const users = []
        for (let i = 0; i < localStorage.length; i++) {
            const value = JSON.parse(localStorage.getItem(i));
            users.push(value);
        }
    
        users.push(user);
    
        for (let i = 0; i < users.length; i++) {
            localStorage.setItem(i, JSON.stringify(users[i]));
          }
    
        console.log('Registration successful!');
        window.location.href = 'login.html';
      });
