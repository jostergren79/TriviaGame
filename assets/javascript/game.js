//define global variables

const myQuestions = [
	{
		question: "Which of the following actors starred in Dances With Wolves?",
		answers: {
			a: 'Tom Cruise',
			b: 'Jack Nicholsan',
			c: 'Kevin Costner',
		},
		correctAnswer: 'c'
	},
	{
		question: "What animal is John Dunbar's companion in Dances With Wolves?",
		answers: {
			a: 'An Eagle',
			b: 'A ferret',
			c: 'A wolf',
		},
		correctAnswer: 'c'
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


//timer work

let number = 60;

let intervalId;

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
   

document.getElementById("question1")
.add
// game function
