var inputName = document.querySelector('#inputName');
var inputEmail = document.querySelector('#inputEmail');
var inputAddress = document.querySelector('#inputAddress');
var inputCity = document.querySelector('#inputCity');
var inputEstado = document.querySelector('#inputEstado');
var inputZip = document.querySelector('#inputZip');


const btnInsert2 = document.querySelector('#btnInsert2');

btnInsert2.onclick = function() {
    var name = inputName.value;
    var email = inputEmail.value;
    var address = inputAddress.value;
    var city = inputCity.value;
    var estado = inputEstado.value;
    var zip = inputZip.value;

    newPerson = {
        name,
        email,
        address,
        city,
        estado,
        zip
    }

    window.localStorage.setItem('cliente', JSON.stringify(newPerson));


    console.log(name);
    console.log(email);
    console.log(address);
    console.log(city);
    console.log(estado);
    console.log(city);
}