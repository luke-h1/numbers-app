const API_URL = 'http://numbersapi.com/random/year?json?' + result;
// http://numbersapi.com/42/math?callback=showNumber"
// maybe introduce a math.floor() for random number output... 

const output = document.querySelector('output');
const btn = document.querySelector('btn');
const form = document.getElementById('form');

btn.addEventListener('click', getData());



function showNumber(str) {
    document.getElementById('number-fact').innerHTML = str;
    console.log(str);
}

fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        const length = res.length;
        const index = length - 1;
        document.getElementById('number-fact').innerHTML = str;
        console.log(str);
    });

// DOCUMENTATION JSON RESPONSE
// // text: A string of the fact text itself.
// found: Boolean of whether there was a fact for the requested number.
// number: The floating-point number that the fact pertains to. This may be useful for, eg. a /random request or notfound=floor. For a date fact, this is the 1-indexed day of a leap year (eg. 61 would be March 1st).
// type: String of the category of the returned fact.
// date (sometimes): A day of year associated with some year facts, as a string.
// year (sometimes): A year associated with some date facts, as a string.
// http://numbersapi.com/random/year?json
// ⇒ {
//     "text": "2012 is the year that the century's second and last solar transit of Venus occurs on June 6.",
//     "found": true,
//     "number": 2012,
//     "type": "year",
//     "date": "June 6"

{
    /* <span id="number-fact"></span> */
}

