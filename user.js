var userNameInput = document.getElementById('userName');
var userLastNameInput = document.getElementById('userLastName');
var userGenreInput = document.getElementById('userGenre');
var userEmailInput = document.getElementById('userEmail');
var userPasswordInput = document.getElementById('userPassword');
var userAgeInput = document.getElementById('userAge');
var userDateOfBirthInput = document.getElementById('userDateOfBirth');
var userCityInput = document.getElementById('userCity');
var userCountryInput = document.getElementById('userCountry');
var logoutBtn = document.getElementById('logout');

logoutBtn.style.display = 'none';

function getUserFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function showUser(data) {
    
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

var loggedUser = getUserFromLocalStorage('loggedUser');



if (loggedUser) {
    showUser(loggedUser);
    logoutBtn.style.display = 'inline-block';
} else {
    window.location = 'home.html'
}

logoutBtn.addEventListener('click', () => {

    if (loggedUser) {
        localStorage.removeItem('loggedUser');
        window.location = 'home.html'
    }
    
});