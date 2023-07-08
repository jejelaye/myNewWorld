let num1 = 8;
let num2 = 5;
document.getElementById("num1").textContent = num1;
document.getElementById("num2").textContent = num2;
let sumEl = document.getElementById("sum-btn");
let cls =0;
// new gamm
//let randomNumberA = Math.floor (Math.random() * 13) + 1;
//let randomNumberB = Math.floor(Math.random() * 11);
let firstCard = randomNumber();
let secondCard = randomNumber();
let cardArray = [firstCard, secondCard];
let sumC =firstCard + secondCard;
let message = " ";
let sumGc = document.getElementById("sum-gc");
let cardEc = document.getElementById("card-ec");
let jacket = document.getElementById("jacket");
let blackjacket = true;
let isAlive = true;

function randomNumber(){
    let randNum = Math.floor(Math.random()*13) + 1;
    return randNum;
}


//let headTwo = document.getElementById("head-two");
//headTwo.textContent = randomNumber;

function add(){
    let total = num1 + num2;
    sumEl.textContent = "Sum: " + total;
}
function subtraction(){
    let total = num1 - num2;
    sumEl.textContent = "Sum: " + total;
}
function division(){
    let total = num1 / num2;
    sumEl.textContent = "Sum: " + total;
}
function multiplication(){
    let total = num1 * num2;
    sumEl.textContent = "Sum: " + total;
}
function council(){
    sumEl.textContent = "Sum: " + cls;

}
// new game function
   
function renderGame(){
   cardEc.textContent = "Card: " 
   sumGc.textContent = "Sum:" + sumC;
   for(let i =0; i < cardArray.length; i++){
    cardEc.textContent += cardArray[i] +" ";
   }
    if(sumC < 21){
        message = "Do you want to try again?";
    }else if(sumC === 21){
        message = "You 've won BlackJacket";
        blackjacket = true;
    }else{
        message = "You out of the game";
        isAlive = false;
    }
    jacket.textContent = message;
}

function startGame(){
    renderGame();
}
function newCard(){
    if(blackjacket === true && isAlive === true ){
        let cardB = randomNumber();
        cardArray.push(cardB);
        sumC += cardB;
        renderGame();
    }
    
}
// sample one
let testWrap = document.getElementById("test-wrap");
let priceWrap = document.getElementById("price");

