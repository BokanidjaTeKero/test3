
var userNameInput = document.getElementById('userName');
var userLastNameInput = document.getElementById('userLastName');
var userGenreInput = document.getElementById('userGenre');
var userEmailInput = document.getElementById('userEmail');
var userPasswordInput = document.getElementById('userPassword');
var userAgeInput = document.getElementById('userAge');
var userDateOfBirthInput = document.getElementById('userDateOfBirth');
var userCityInput = document.getElementById('userCity');
var userCountryInput = document.getElementById('userCountry');
var userImgInput = document.getElementById('userImage');
var SubmitUser = document.getElementById('SubmitUser');
var userList = document.getElementById('userList');
var users = document.getElementById('users');
var myNotificationAdd = document.getElementById('myNotificationAdd');

var image = document.getElementById('image_uploads');

image.addEventListener('change', (e) => {
    

    var imageValue = e.target.value;
    
    var imagePath = takeImagePath(imageValue);

    userImgInput.setAttribute('src', imagePath);


})

// console.log('IMAGE', image.value)
function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    myNotificationAdd.classList.add('isAdd');

    setTimeout(function() {
        myNotificationAdd.classList.remove('isAdd');
    }, 2000);
}

function takeImagePath(imgPath) {
    return `/images/${imgPath.split('\\')[2]}`; 
}


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
    user.uploadedImage = takeImagePath(image.value);
    // user.img = userImgInput.value;

    var isValid = false;

    // let failures = [];

    // if(user.name.length < 8){
    //     failures.push({'userName', msg: 'dadadada'})
    // }

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


    if(isValid) {
        setLocalStorage(user.email, user); 
        clearInputFields();
        window.location = 'login.html'
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