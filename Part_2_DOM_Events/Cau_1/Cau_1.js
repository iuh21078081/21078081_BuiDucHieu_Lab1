let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {

    document.querySelector('.message').textContent = message;
};
document.querySelector(".check").addEventListener('click',()=>{
  if(score!=0){
    const inputValue =  document.querySelector('.guess').value

    if(secretNumber< new Number(inputValue)){
      displayMessage("Too high")
    }else if(secretNumber> new Number(inputValue)){
      displayMessage("Too low")
    }else{
      document.querySelector('.number').textContent = secretNumber+""
      document.querySelector('.message').style.color = 'green'
      displayMessage("Correct !!")
    }
  }
  score--;
  document.querySelector('.score').textContent = score;
})
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
