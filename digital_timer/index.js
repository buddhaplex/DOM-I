const digits =  document.querySelector(".digits"); // this calls the base class for all the digits
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const msOnes = document.getElementById("msOnes");


console.log("this is a test!")
countUpTimer();

function countUpTimer () {
    initialize();


    function initialize () {
        let milliseconds = 0;

        secondTens.innerHTML = "0";
        secondOnes.innerHTML = "0";
        msHundreds.innerHTML = "0";
        msTens.innerHTML = "0";


        const timerInterval = window.setInterval(() => {
            milliseconds += 10;
            if(milliseconds === 10000) {
                endTimer(timerInterval);
            }
            updateTimer(milliseconds);
        }, 10);
    }

    function increment (num) {
        let number = Number(num) + 1;
        return number.toString();
    }
    

    function endTimer (intervalId) {
        clearInterval(intervalId);
        Array.from(digits.children).forEach(digit => {
            digit.classList.add('redDigit');
        })
    }


    function updateTimer (milliseconds) {
        if(milliseconds === 10000) {
            secondTens.innerHTML = "1";
            secondOnes.innerHTML = "0";
            msHundreds.innerHTML = "0";
            msTens.innerHTML="0";
        } else if (milliseconds % 1000 === 0) {
            secondOnes.innerHTML =increment(secondOnes.innerHTML);
            msHundreds.innerHTML = "0";
            msTens.innerHTML ="0";
        } else if (milliseconds % 100 === 0) {
            msHundreds.innerHTML = increment(msHundreds.innerHTML);
            msTens.innerHTML ="0";
        } else {
            msTens.innerHTML = increment(msTens.innerHTML);
        }
    }
}
// pseudo code 

// 1. select the counter elements 
// 2. set a count variable to zero
// 3. write a function that lets the counter count up to 10 seconds, 
// 4. turn all digits and colon red at 10 seconds and
// 5. stop (clearInterval ?)
