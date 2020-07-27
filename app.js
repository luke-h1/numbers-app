// const myForm = document.getElementById('testing');
// myForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const userInput = document.getElementById('numberReq').value;
//     const API_URL = 'http://numbersapi.com/' + userInput;

//     fetch(API_URL)
//         .then((res) => res.json())
//         .then((res) => {
//             console.log(res);

//         });
// });

const API_URL = 'http://numbersapi.com/random/year';
const columnElement = document.querySelector('.columns');
const goButton = document.querySelector('.go-button');
const loadingElement = document.querySelector('.loading');


loadingElement.style.display = 'none';

async function getData() {
    loadingElement.style.display = '';
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json.message);
    json.message((year) => {
        columnElement.innerHTML += `
        <div class="column> 
        <h1>`;
    }); 
    loadingElement.style.display = 'none' 
}


goButton.addEventListener('click', getData); 
