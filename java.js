let number = Math.floor(Math.random() * 100);
let guess;
let limit= 3;
var won = false;
let guesses = [];



/// program data
for(i= 1; i<= limit; i++) {
  guess= prompt("Guess a number");

  if(guess == number) {
    document.write("Correct!")
    won= true;
    break;
  }

  //wrong 
  else{
    guesses[i] = guess;
    alert("Incorrect. \nYou have guessed: " +guesses.toString() + "\nTries remaining: " + (limit -i));
  }
  document.write("You're out of attempts. GAME OVER!!")
}

function isPreviousGuess (){
  for(i = 0; i< guesses.length; i++){
    if(guesses[i] = guess){
      return true;
    }
  }
  return false
}



