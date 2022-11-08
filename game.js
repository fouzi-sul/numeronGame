// Generate 2 random numbers, select the dom for numberbox 1 and 2 


var operator;
var score = 0;

//Select the dom for numberbox 3



function randomise() {
    // generate 2 random numbers again
    
    // if number 1 is less that number 2 then swap (since we want the result to be positive)
    

    // Generate a random number between 0 to 5:
    /*if the number is:
    1. number 3 should be addition of number 1 and 2
    2. number 3 should be difference of number 1 and 2
    3. number 3 should be multiplication of number 1 and 2
    4. number 3 should be floor of division of number 1 and 2
    5. number 3 should be modulous of number 1 and 2
    0. Call the randomise function again
    */
   operator = Math.round(Math.random() * 5)
    switch (operator) {
        

    }

    // Place the numbers in their boxes by making use of innerhtml
    
    console.log(number1 + " " + number2 + " " + number3 + " " + operator);
}

randomise();

//select the plus, minus,mul,divide,modulus buttons



// When these buttons are clicked, check if the selection is correct,
/**if the selection is correct then: 
 1. Increment the score 
 2. generate random numbers again 
 3. reset timer

 otherwise: redirect to gameover.html
**/



// timer functions
var time = 30;
var timerId;

function startTimer() {
    time = 30;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();
