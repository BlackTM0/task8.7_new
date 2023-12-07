var minNumber = 0;
var maxNumber = 0;
var gameRun =true;
var score =0;
var gamescore = document.querySelector('#question-number'); 
var header = document.querySelector('#top-header');
var answer = document.querySelector('#answer-text');
var starts = document.querySelector('#start'); 
var answerNumber;









function minValue() {
  const firstNumber = document.querySelector('#input-min');
  firstNumber.addEventListener('input', () => {
    minNumber = firstNumber.value;
    header.textContent='';
    if(minNumber < -999||minNumber>999) { 
      let error = document.querySelector('#error'); 
      error.textContent =`Введите число от -999 до 999. Вы указали ${minNumber} `;
      firstNumber.value =''; 
      gameRun =false;

    }

  });
}

function maxValue() {
  const secondNumber = document.querySelector('#input-max');
  secondNumber.addEventListener('input', () => {
    maxNumber = secondNumber.value;
    header.textContent='';
    if(maxNumber < -999||maxNumber>999) { 
      let error = document.querySelector('#error'); 
      error.textContent =`Введите число от -999 до 999. Вы указали ${maxNumber} `;
      secondNumber.value =''; 
      gameRun =false;
    }

  });
}





function start() {
  starts.addEventListener('click', () => {
    if (!isNaN(minNumber) && (!isNaN(maxNumber))) {
      minNumber = parseInt(minNumber);
      maxNumber = parseInt(maxNumber);
      answerNumber = Math.floor((minNumber + maxNumber)/2)
      
      document.querySelector('#btn-low').addEventListener('click', () => { 
        maxNumber = answerNumber -1; 
        answerNumber = Math.floor((minNumber + maxNumber)/2); 
        answer.textContent = `Ваше число ${answerNumber}`;   
        score ++; 
        gamescore.textContent = `Вопрос № ${score}`;  
      })
      document.querySelector('#btn-high').addEventListener('click', () => { 
        minNumber = answerNumber +1; 
        answerNumber = Math.floor((minNumber + maxNumber)/2); 
        answer.textContent = `Ваше число ${answerNumber}`;     
        score ++; 
        gamescore.textContent = `Вопрос № ${score}`;  
      })    
      
      document.querySelector('#rewind').addEventListener('click', () => { 
        const rightAnswer = ['Я всегда угадываю', 'Ну и кто молодец?)', 'Я умнее, чем ты думаешь']; 
        let rightAnswerText = rightAnswer[Math.floor(Math.random()*rightAnswer.length)];

        answer.textContent = rightAnswerText;       
      }) 
    

      setTimeout(() => {
        answer.textContent = 'Подключаюсь';
        setTimeout(() => {
          answer.textContent = 'И..мой ответ...';
          setTimeout(() => {
            answer.textContent = `Ваше число ${answerNumber}`; 
            
          }, 1000);
        }, 1000);
      }, 1000);
      
      header.textContent = '';
      error.textContent = '';
    } else {
      error.textContent = 'Введите числа';
      gameRun =false;
    }
  });

}

document.querySelector('#btn-rtr').addEventListener('click', () => { 
  minNumber = '';
  maxNumber = '';
  document.querySelector('#input-min').value = '';
  document.querySelector('#input-max').value = '';
  header.textContent = 'Введите число от 1 до 100, а я угадаю его';
  gamescore.textContent = ''; 
  error.textContent = '';
  answer.textContent ='';
  start();
});




start()

minValue()
maxValue()
