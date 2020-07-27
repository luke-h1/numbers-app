const myform = document.querySelector('.test');
myform.addEventListener('submit', function (e) {
    e.preventDefault();
    const API_URL = 'http://numbersapi.com/random/year?json' 
    fetch(API_URL) 
    .then((res) => res.json()) 
    .then((res) => { 
        console.log(res)
    })

});
