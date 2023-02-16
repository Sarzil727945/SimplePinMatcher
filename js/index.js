function pinNumber(){
     const random = Math.round(Math.random()*10000);
     return random;
}

function fourDigitPin(){
     const pin = pinNumber();
     const pinString = pin+'';

     if(pinString.length==4){
          return pin;
     }
     else{
          return fourDigitPin();
     }
}

document.getElementById('generate-pin').addEventListener('click', function(){
     const inputPin = document.getElementById('input-pin');
     inputPin.value = fourDigitPin();
})

// calculator part 
document.getElementById("calculator").addEventListener("click", function(event){
     const value = event.target.innerText;
     const display = document.getElementById('input-calculation');
     const displayValue = display.value;
     const valueAdd = displayValue+value;
     display.value = valueAdd ;
     if(value == 'C'){
      display.value ='';  
     }
     else if(value=='<'){
         const array = displayValue.split('');
         array.pop();
         const string = array.join('');
         display.value = string;
     }
})
// pin check
document.getElementById('btn-submit').addEventListener('click', function(){
     const displayValues = document.getElementById('input-calculation');
     const displayValuesString = displayValues.value;
     const inputPin = document.getElementById('input-pin');
     const inputPinString = inputPin.value;
     const pinRightNotification = document.getElementById('pin-right');
     const wrongNotification = document.getElementById('pin-wrong');
     if(displayValuesString == inputPinString){
         pinRightNotification.style.display='block';
         wrongNotification.style.display='none';
     }
     else{
          pinRightNotification.style.display='none';
          wrongNotification.style.display='block';  
     }
     
})