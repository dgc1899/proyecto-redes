function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'Hi' && password === 'Test')
    {
        // alert('Login Successfuly!!');
        window.open("https://dgc1899.github.io/proyecto-redes/views/home.html?fbclid=IwAR1MibUYgsYxrjMijIqMjFthUfSOXwprOZTBU_rpzJLpsIs_wj89gwpBqWU", '_self');
    } else {
        alert('Wrong credentials...')
        window.open("https://dgc1899.github.io/proyecto-redes/views/login.html?fbclid=IwAR2tQCcQ4b4TOlWa7F88EuyfL3GUHDhjHnaE_jqUncbTtsnobjs43biAH5o", '_self');
    }
}