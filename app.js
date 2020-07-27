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
            const text = document.getElementById('text').innerHTML = res.text
            const type = document.getElementById('type').innerHTML = 'number ' + res.type
            
            
            
        });
});


// respose 


// "text": "1142 is the year that Henry the Lion becomes Duke of Saxony.",
// "number": 1142,
// "found": true,
// "type": "year"

//  // fix concatenation issue
//  confirmed.innerHTML = '';
//  recovered.innerHTML = '';
//  deaths.innerHTML = '';


// <script>
// document.getElementById("demo").innerHTML =
// obj.employees[1].firstName + " " + obj.employees[1].lastName;
// </script>