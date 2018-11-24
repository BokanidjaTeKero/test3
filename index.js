
function getData() {

    var url = 'https://api.myjson.com/bins/w4xey';

    fetch(url)
    .then(res => res.json())
    .then(response => {
        console.log('RESPONSE', response)

        localStorage.setItem('response', JSON.stringify(response))
    })

}



var user = {
    "name": "Bojan",
    "lastName": "petrovic",
    "city": "smederevo",
    "age": 27
}



function updateUser(property, value) {
    user[property] = value;
    
    return user;
}


function updateLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}