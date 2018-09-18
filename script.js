
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





