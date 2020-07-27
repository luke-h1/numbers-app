


    
const myform = document.querySelector('.test'); 
myform.addEventListener('submit', function(e){
    e.preventDefault(); 
    const number = document.getElementById('number'); 
    const API_URL = 'http://numbersapi.com/' + number; 
    let response =  fetch(API_URL);   
    let result =  response.text();  
    result.appendChild()
    
}); 


