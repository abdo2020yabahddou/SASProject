const p = require(`prompt-sync`)()

const candidates = [{
    CIN: "PA124732",
    firstname: "Ahmed",
    lastname: "katir",
    political_party: "PAM",
    age: 45,
    voters: []
}]

let isRunning = true;

while (isRunning){
    console.log("0. quit");
    console.log("1. add a new candidate");
    console.log("2. add multiple candidates");
    console.log("3. show the candidates");
    console.log("4. show the candidates by political party");
    console.log("5. vote for your candidate");



    let choice = Number(p("Enter a number between 0 and 5: "))

    switch(choice){
        case 1:
            addCandidate(candidates)
            console.log("Done");
            break;

        case 2:
            let number = Number(p("How many candidates?: "));
            if(number <= 0 || isNaN(number)){
                console.log("enter a positive number!!!");
                break;
            }
            for (let i = 0; i < number; i++) {
                addCandidate(candidates);
            }
            break;

        case 3:
            console.log(candidates);
            break;

        case 4:
            filter(candidates);
            break;

        case 5:
            vote(candidates)
            break;

        case 0:
            isRunning = false
            console.log("Quiting");
            break;

        default:
            console.log("please enter a new number between 0 and 5");
            break;
    }
}

function addCandidate(candidates){
    let CIN = p("write your CIN: ");
    let firstname = p("enter your firstname: ");
    let lastname = p("enter your lastname: ")
    let political_party = p("enter your political party: ")
    let age = Number(p("enter your age: "))

    if (!CIN || !firstname || !lastname || !political_party || isNaN(age)) {
        console.log("please fill in all the fields, note that age should be a positive number");
        return;
    }

    if (age < 21) {
        console.log("sorry, You can't be a candidat");
        return;
    }

    let exists = false;
    for (let i = 0; i < candidates.length; i++){
        if (candidates[i].CIN === CIN) {
            exists = true;
            break;
        }
    }
    if (exists) {
        console.log("This CIN already exists");
        return;
    }

    const newCandidate = {
        CIN : CIN,
        firstname: firstname,
        lastname: lastname,
        political_party: political_party,
        age: age,
        voters: []
    }

    candidates.push(newCandidate);
}

function filter(candidates){
    let count  = 0
    for (let i = 0; i < candidates.length; i++){
        count = count + candidates[i].political_party
    }
    return `${candidates.political_party}: ${count}`
}

function vote(candidates){
    let your_CIN = p("enter your CIN: ");
    let candidate_CIN = p("enter the CIN of your candidate: ")

    const candidate = candidates.find(candidate => candidate.CIN === candidate_CIN)

    if(!candidate){
        console.log("candidate not there");
    }

    let votedAlready = false

    for (let i = 0; i < candidate.length; i++){
        if (candidate.voters.includes(your_CIN)){
            votedAlready = true
            return;
        }
    }
    if(votedAlready){
        console.log("you already voted");
        return;
    }

    candidate.voters.push(your_CIN)
}