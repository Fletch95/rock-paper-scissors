function getComputerChoice() {
    let rnd = Math.floor(Math.random()*3);
    console.log(rnd);

    switch (rnd) {
        case 0:
            return "Rock";

        case 1:
            return "Paper";

        case 2:
            return "Scissors";
    }
}