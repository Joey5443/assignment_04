let choice1 = prompt("Do you choose rock, paper or scissors?");
let choice2 = Math.random();
if (choice2 < 0.34) {
    choice2 = "rock";
} else if (choice2 <= 0.67) {
    choice2 = "paper";
} else {
    choice2 = "scissors";
}

var compare = (choice1, choice2) => {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            if (choice2 === "scissors") {
                return "scissors wins";
            }
        }
    }
        if (choice1 === "scissors") {
            if (choice2 === "rock") {
                return "rock wins";
            } else {
                if (choice2 === "paper") {
                    return "scissors wins";
                }
            }
        }
        if (choice1 === null){
            window.alert("Man up and Pick rock, paper, or scissors")
        }
    };
console.log("User Choice: " + choice1);
console.log("Computer Choice: " + choice2);
let winner = compare(choice1, choice2);
window.alert(winner)