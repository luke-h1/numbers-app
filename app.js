const API_URL = 'http://numbersapi.com/' + search;

const output = document.querySelector('output');
const btn = document.querySelector('btn');

async function getFact() {
    output.innerHTML = ''; 
    const response = await fetch(API_URL); 
    const json = await response.json(); 
    console.log(json.message); 
}
