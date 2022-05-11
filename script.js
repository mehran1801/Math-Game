console.clear();
const checkBtn = document.querySelector('button')
const inputEl = document.querySelector('input')
const firstDigit = document.querySelector('.blue')
const secondDigit = document.querySelector('.red')
const result = document.querySelector('.result')
const modal = document.getElementById('myModal')
const theAnswer = document.querySelector('.theAnswer');
const closeBtn = document.querySelector('.close');
let answerOptions = ["Correct, good work!", "Incorrect, try again"];

checkBtn.addEventListener('click',()=>{
    let userInput = parseInt(inputEl.value);
    modal.style.display = 'block';
    if(userInput===2){
       theAnswer.innerHTML = answerOptions[0];
       modal.style.background = 'lightgreen';
    }else{
       theAnswer.innerHTML = answerOptions[1];
       modal.style.background = '#e74c3c'
    }
})

closeBtn.addEventListener('click', _=>{
    modal.style.display = 'none';
 inputEl.value = "";
})