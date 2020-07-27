const myform = document.querySelector('.test');
myform.addEventListener('submit', function (e) {
    e.preventDefault();
    const API_URL = 'http://numbersapi.com/random/year?json';
    fetch(API_URL)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            const found = document.getElementById('found').innerHTML = 'Found: ' + res.found
            const number = document.getElementById('number').innerHTML = 'number ' + res.number
            const text = document.getElementById('text').innerHTML =  res.text
            const type = document.getElementById('type').innerHTML = 'number: ' + res.type
            
            
            
        }); 
        found.innerHTML = ''
        number.innerHTML = ''
        text.innerHTML = ''
        type.innerHTML = ''
});

