//defining global variables

const myQuestions = [
	{
		question: "Which of the following actors starred in Dances With Wolves?",
		answers: {
			a: 'Kevin Costner',
			b: 'Jack Nicholsan',
			c: 'Tom Cruise',
		},
		correctAnswer: 'a'
	},
	{
		question: "What animal is John Dunbar's companion in Dances With Wolves?",
		answers: {
			a: 'a ferret',
			b: 'a wolf',
			c: 'an Eagle',
		},
		correctAnswer: 'b'
    },
    {
		question: "What war did John Dunbar fight in?",
		answers: {
			a: 'The War of 1812',
			b: 'The Vietnam War',
			c: 'The Civil War',
		},
		correctAnswer: 'c'
	},
];

let number = 60;
let intervalId;

// still need to hide the questions, prevent more than one selection, and delay the timer until the startGame button has been clicked 



    document.getElementById("startGame").addEventListener("click",run) 

    function run() {

      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      document.getElementById("startGame").innerHTML = "<h2>" + number + "</h2>";


      if (number === 0) {

        stop();
        alert("Time Up!");
      }
    }

function stop() {

  clearInterval(intervalId);
}

run();
   

// need to use my object above to compare users guess and tally score at end of timer.

