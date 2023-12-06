function guessnumber() {
    //generate a rondom number b/w to 10 and//**
    var number = Math.floor(Math.random() * 10) + 1;

    //prompt the user to guess number 
    var guess = prompt("Guess! number b/w 1 to 10")

    //check if the user is correct 
    if (guess == number) {
        alert("you! guessed it Congratulations")
    } else {
        alert("Sorry , the number was" + ".Try again ")
    }


}