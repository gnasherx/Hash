document.getElementById('signin_submit').onclick = function (e) {
    e.preventDefault();

    // gets data from input text
    var signin_email = document.getElementById('signin_email').value;
    var signin_password = document.getElementById('signin_password').value;

    console.log(signin_email, signin_password)

    fetch('http://localhost:8000/api/login', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: signin_email,
            password: signin_password
        })
    }).then(res=>res.json())
        .then(res => console.log(res));


};