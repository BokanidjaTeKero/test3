
var userList = document.getElementById('userList');
var users = document.getElementById('users');
var DeleteUser = document.getElementById('DeleteUser');
var myNotificationRem = document.getElementById('myNotificationRem');
var myNotificationError = document.getElementById('myNotificationError');


function getUserFromLocalStorageOnload() {
    for( var i = 0, len = localStorage.length; i < len; ++i) {
        var key = localStorage.key(i);
        appnedUserToList(key, 'firstLoad');
    }
}



DeleteUser.addEventListener('click', () => {

    var key = userList.querySelector('li.email span').innerText;

    if (key) {
        removeUser(key);
        
        clearSelectedUser();
    }
})



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


getUserFromLocalStorageOnload();


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
        item.style.textShadow = 'none';
    })
}



function selectUserStyle(item) {
    resetUsersListStyle();
    item.style.textShadow = '0 0 3px rgb(13, 245, 5), 0 0 5px rgb(13, 245, 5)';
}



users.addEventListener('click', (ev) => {
    var user = ev.target.innerText;
   
    selectUserStyle(ev.target);
    showUser(user);
})