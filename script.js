
document.getElementById('submit').onclick = function (e) {
    // gets data from input text
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    fetch('http://localhost:8000/api/signup', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            username: username,
            email: email,
            password: password
        })
    }).then(res=>res.json())
        .then(res => console.log(res));


    e.preventDefault();
};


document.getElementById('signin_submit').onclick = function (e) {
    e.preventDefault();

    // gets data from input text
    var signin_email = document.getElementById('signin_email').value;
    var signin_password = document.getElementById('signin_password').value;

    console.log(signin_email, signin_password)

    // fetch('http://localhost:8000/api/login', {
    //     method: 'post',
    //     headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         email: signin_email,
    //         password: signin_password
    //     })
    // }).then(res=>res.json())
    //     .then(res => console.log(res));


};


