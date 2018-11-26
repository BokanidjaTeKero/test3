
var userEmailInput = document.getElementById('userEmail');
var userPasswordInput = document.getElementById('userPassword');
var Login = document.getElementById('Login');
var myNotificationAdd = document.getElementById('myNotificationAdd');
var myNotificationTypePassword = document.getElementById('myNotificationTypePassword');
var myNotificationInvalidPassword = document.getElementById('myNotificationInvalidPassword');
var myNotificationWelcomeNeo = document.getElementById('myNotificationWelcomeNeo');
var myLoader = document.getElementById('Loader');
 

function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getUserFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function errorMessage(message) {
    alert(message)
}


Login.addEventListener('click', () => {
    
    var email = userEmailInput.value;
    var password = userPasswordInput.value;

    var user = getUserFromLocalStorage(email);

    
    
    if (user) {
        
        if (user.password === password) {
            setLocalStorage('loggedUser', user);
            myLoader.classList.add('isLoading');
            setTimeout(function() {
                myLoader.classList.remove('isLoading')
                window.location = 'user.html';
            },2000);
        } else if (password.length === 0) {
            myNotificationTypePassword.classList.add('isAdd');
            setTimeout(function() {
                myNotificationTypePassword.classList.remove('isAdd');
            }, 1500);
        } else {
            myNotificationInvalidPassword.classList.add('isAdd');
            setTimeout(function() {
                myNotificationInvalidPassword.classList.remove('isAdd');
            }, 1500);
        }
    } else {
        myNotificationWelcomeNeo.classList.add('isAdd');
        setTimeout(function() {
            myNotificationWelcomeNeo.classList.remove('isAdd');
        }, 1500);
    }

 

     valid();

     
})



function valid() {

var adminEmail = 'admin';
var adminPassword = 'admin';



if(adminEmail == userEmailInput.value && adminPassword == userPasswordInput.value) {
    myNotificationWelcomeNeo.classList.add('isAdd');
        setTimeout(function() {
            myNotificationWelcomeNeo.classList.remove('isAdd');
            window.location = "admin.html";
        }, 1500);
    
}
}






function getDataFromLocalStorage(key) {

    if(!localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
}

