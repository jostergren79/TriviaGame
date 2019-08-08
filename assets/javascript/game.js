//define global variables

let number = 60;

let intervalId;

    document.getElementById("startGame").addEventListener("click", run);

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
   
