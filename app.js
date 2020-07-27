const myform = document.querySelector('.test');
myform.addEventListener('submit', function (e) {
    e.preventDefault();
    const number = document.getElementById('number').value;
    const API_URL = 'http://numbersapi.com/' + number;
    let response = fetch(API_URL);   
    console.log(response)
});
