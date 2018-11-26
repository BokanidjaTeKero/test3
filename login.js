
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

    // console.log('input password', password)
    
    if (user) {
        // console.log('USER', user.password);
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

     // get user email (key) from localstorage

     // check if password from local storage is equal to input password

    //  kurcinaBre();
    // getUserFromLocalStorageOnload()
})

// function valid() {
//     var dataEmail = localStorage.getItem('email');
//     var dataPassword = localStorage.getItem('password');

//     var imejl = dataEmail.value;
//     var pasvord = dataPassword.value;

//     var email = userEmailInput.value;
//     var password = userPasswordInput.value;

//     if( email == imejl && password == pasvord) {
//         // window.location = "user.html";
//         alert('ok je');
//     } 
//     else {
//         alert('error');
//     }

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

// function kurcinaBre() {
//     for( var i = 0, len = localStorage.length; i < len; ++i) {
//         var key = localStorage.key(i);
//         var storedEmail = key.email;
//         var storedPassword = key.password;
        
//         var email = userEmailInput.value ;
//         var password = userPasswordInput.value;

//         if(email == storedEmail && password == storedPassword) {
//         window.location = "user.html";
//         } else {
//         alert('greska sa juzerom');
//         }
//     }
// }











function getDataFromLocalStorage(key) {

    if(!localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
}

// var juzeri = JSON.parse(localStorage.getItem(key));
// var storedEmail = juzeri.email;
// var storedPassword = juzeri.password;

// var entriesJS = localStorage.getItem('names');
// if (!localStorage.getItem(key)) {
//     alert("Nothing stored!");
//     event.preventDefault();
//     return;
// }

// function getUserFromLocalStorageOnload() {
//     for( var i = 0, len = localStorage.length; i < len; ++i) {
//         var key = localStorage.key(i);
//         var storedEmail = key.email;
//         var storedPassword = key.password;

//         if(userEmailInput == storedEmail && userPasswordInput == storedPassword) {
//             window.location = "user.html";
//         } else {
//             alert('greska sa juzerom');
//         }
//     }
// }

// event.preventDefault();