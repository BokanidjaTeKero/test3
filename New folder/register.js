
var userNameInput = document.getElementById('userName');
var userLastNameInput = document.getElementById('userLastName');
var userGenreInput = document.getElementById('userGenre');
var userEmailInput = document.getElementById('userEmail');
var userPasswordInput = document.getElementById('userPassword');
var userAgeInput = document.getElementById('userAge');
var userDateOfBirthInput = document.getElementById('userDateOfBirth');
var userCityInput = document.getElementById('userCity');
var userCountryInput = document.getElementById('userCountry');
// var userImgInput = document.getElementById('userImage');
var SubmitUser = document.getElementById('SubmitUser');
var userList = document.getElementById('userList');
var users = document.getElementById('users');
var DeleteUser = document.getElementById('DeleteUser');

var myNotificationAdd = document.getElementById('myNotificationAdd');
var myNotificationRem = document.getElementById('myNotificationRem');
var myNotificationError = document.getElementById('myNotificationError');

var imgPlaceholder = document.getElementById('imgPlaceholder');




// SubmitUser.disable = true;

function getUserFromLocalStorageOnload() {
    for( var i = 0, len = localStorage.length; i < len; ++i) {
        var key = localStorage.key(i);
        appnedUserToList(key, 'firstLoad');
    }
}



function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    myNotificationAdd.classList.add('isAdd');

    setTimeout(function() {
        myNotificationAdd.classList.remove('isAdd');
    }, 2000);
}



DeleteUser.addEventListener('click', () => {

    var key = userList.querySelector('li span').innerText;

    if (key) {
        removeUser(key);
        clearSelectedUser();
    }
})





SubmitUser.addEventListener('click', () => {

    var user = {};

    user.name = userNameInput.value;
    user.lastName = userLastNameInput.value;
    user.genre = userGenreInput.value;
    user.email = userEmailInput.value;
    user.password = userPasswordInput.value;
    user.age = userAgeInput.value;
    user.dateOfBirth = userDateOfBirthInput.value;
    user.city = userCityInput.value;
    user.country = userCountryInput.value;
    // user.img = userImgInput.value;


    var isValid = false;

    if(user.name.length > 8) {
        userNameInput.setAttribute('class', 'good');
        if(user.lastName.length > 8) {
            userLastNameInput.setAttribute('class', 'good');
            if(user.email.match(/[@]/g)) {
                userEmailInput.setAttribute('class', 'good');
                if(user.password.length && user.password.match(/[A-Z]/g) && user.password.match(/[0-9]/g)) {
                    userPasswordInput.setAttribute('class', 'good');
                    if(user.age.length > 0 && user.age.match(/[0-9]/g)) {
                        userAgeInput.setAttribute('class', 'good');
                        isValid = true;
                    } else {
                        userAgeInput.setAttribute('class', 'error');
                    }
                } else {
                    userPasswordInput.setAttribute('class', 'error');
                }
            } else {
                userEmailInput.setAttribute('class', 'error');
            }
        } else {
            userLastNameInput.setAttribute('class', 'error');
        }
    } else {
        userNameInput.setAttribute('class', 'error');
    }




    // if(user.name.length > 8 && user.lastName.length > 8 && user.email.match(/[@]/g) && user.password.length > 8 && user.password.match(/[A-Z]/g) && user.password.match(/[0-9]/g) && user.age.length > 0 && user.age.match(/[0-9]/g) ) {
    //     isValid = true;
    //     // SubmitUser.disable = false;
    // }

    if(isValid) {
        resetUsersListStyle();
        setLocalStorage(user.name, user); 
        showUser(user.name);
        clearInputFields();
        appnedUserToList(user.name);

    }

});



function clearInputFields() {
    userNameInput.value = '';
    userLastNameInput.value = '';
    userGenreInput.value = '';
    userEmailInput.value = '';
    userPasswordInput.value = '';
    userAgeInput.value = '';
    userDateOfBirthInput.value = '';
    userCityInput.value = '';
    userCountryInput.value = '';
    // userImgInput.value = '';

    userNameInput.setAttribute('class','');
    userLastNameInput.setAttribute('class','');
    userGenreInput.setAttribute('class', '');
    userEmailInput.setAttribute('class','');
    userPasswordInput.setAttribute('class','');
    userAgeInput.setAttribute('class','');
    userDateOfBirthInput.setAttribute('class', '');
    userCityInput.setAttribute('class', '');
    userPasswordInput.setAttribute('class', '');
    // userImgInput.setAttribute('class','');
}




function getDataFromLocalStorage(key) {

    if(!localStorage.getItem(key)) {
        myNotificationError.classList.add('isError');
        setTimeout(function() {
            myNotificationError.classList.remove('isError');
        }, 2000);
    } else {
        return JSON.parse(localStorage.getItem(key));
    }
}




function showUser(user) {
    
    var userListLi = userList.querySelectorAll('li span');
    var name = userListLi[0];
    var lastName = userListLi[1];
    var genre = userListLi[2];
    var email = userListLi[3];
    var password = userListLi[4];
    var age = userListLi[5];
    var dateOfBirth = userListLi[6];
    var city = userListLi[7];
    var country = userListLi[8];
    // var img = imgPlaceholder;

    var data = getDataFromLocalStorage(user);

    name.innerText = data.name;
    lastName.innerText = data.lastName;
    genre.innerText = data.genre;
    email.innerText = data.email;
    password.innerText = data.password;
    age.innerText = data.age;
    dateOfBirth.innerText = data.dateOfBirth;
    city.innerText = data.city;
    country.innerText = data.country;
    
    // img.setAttribute('src', data.img)

}

function clearSelectedUser() {

    var userListLi = userList.querySelectorAll('li span');

    var name = userListLi[0];
    var lastName = userListLi[1];
    var genre = userListLi[2];
    var email = userListLi[3];
    var password = userListLi[4];
    var age = userListLi[5];
    var dateOfBirth = userListLi[6];
    var city = userListLi[7];
    var country = userListLi[8];
    // var img = imgPlaceholder;

    name.innerText = '';
    lastName.innerText = '';
    genre.innerText = '';
    email.innerText = '' ;
    password.innerText = '';
    age.innerText = '';
    dateOfBirth.innerText = '';
    city.innerText = '';
    country.innerText = '';
    // img.removeAttribute('src');
}




function addNewLi(text) {
    var newLiElement = document.createElement('li');
    var newLiElementContent = document.createTextNode(text);
    newLiElement.appendChild(newLiElementContent);

    return newLiElement
}


function appnedUserToList(key, onload) {
    var user = addNewLi(key);
    

    if( onload !== 'firstLoad') {
        user.style.color = 'green';

    }

    users.appendChild(user);
}







function resetUsersListStyle() {
    var list = users.querySelectorAll('li');

    list.forEach(item => {
        item.style.color = 'black';
    })
}



function selectUserStyle(item) {
    resetUsersListStyle();
    item.style.color = 'green';
}



users.addEventListener('click', (ev) => {
    var user = ev.target.innerText;
   
    selectUserStyle(ev.target);
    showUser(user);
})

function removeUser(key) {
    localStorage.removeItem(key);
    var usersLi = users.querySelectorAll('li');
    usersLi.forEach((item, index) => {

        if (key === item.innerText) {
            users.children[index].remove()
        }
    })
    myNotificationRem.classList.add('isRem');

    setTimeout(function() {
        myNotificationRem.classList.remove('isRem');
        }, 2000);
    
}


// showUser();

getUserFromLocalStorageOnload();


// ako nije prosao validaciju dodaj klasu error na input polja !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// koja ce da ima npr red border!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ako je uspesna validacija a prethodno ima klasu error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// kada cistis polja obrisi i klase error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ako je uspesno uneto u local storage !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// dodati dole levo notifikaciju zelenu sa porukom da je uspesno upisano u localstorage!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// kada brises iz local storage dodati notifikaciju zelenu da je uspesno obrisano iz local storage!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// u koliko dodje do greske (npr. ne moze da nadje usera u localstorage 'undefined') !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// prikazati isto notifikaciju crvenu da je doslo do greske!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// srediti malo css da lici na nesto


// napraviti home.html gde ce imati 2 dugmeta register i login !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// napraviti login.html !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// napraviti register.html !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// napraviti user.html
// na ovoj stranici prikazati sve podatke za ovog usera koji je odradio login


// kada se uspesno loginuje redirektovati ga na user.html
// hint window.location (procitatio o tome)
// napraviti search.html

// svaka stranica ima navigaciju ka ovim stranicama povezati ih sve sa <a href=""  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// napraviti admin.html stranicu i u nju ubaci Users List da prikaze listu iz localstorage
// dodati takodje delete i select user