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

while (isRunning) {
    console.log("0. quit");
    console.log("1. add a new candidate");
    console.log("2. add multiple candidates");
    console.log("3. show the votes of each candidate");
    console.log("4. show the candidates by political party");
    console.log("5. vote for your candidate");
    console.log("6. show the candidates")
    console.log("7. edit a candidate");
    console.log("8. find a candidate")


    let choice = Number(p("Enter a number between 0 and 8: "))

    switch (choice) {
        case 1:
            addCandidate(candidates)
            console.log("Done");
            break;

        case 2:
            let number = Number(p("How many candidates?: "));
            if (number <= 0 || isNaN(number)) {
                console.log("enter a positive number");
                break;
            }
            for (let i = 0; i < number; i++) {
                addCandidate(candidates);
            }
            break;

        case 3:
            showByVotes(candidates);
            break;

        case 4:
            display(candidates);
            break;

        case 5:
            vote(candidates)
            break;

        case 6:
            console.log(candidates)
            break;

        case 7:
            editCandidate(candidates)
            break

        case 8:
            findByName(candidates)
            break;

        case 0:
            isRunning = false
            console.log("Quiting");
            break;

        default:
            console.log("please enter a new number between 0 and 8");
            break;
    }
}

function addCandidate(candidates) {
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
    for (let i = 0; i < candidates.length; i++) {
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
        CIN: CIN,
        firstname: firstname,
        lastname: lastname,
        political_party: political_party,
        age: age,
        voters: []
    }

    candidates.push(newCandidate);
}

function showByVotes(candidates) {
    let sorted = [];
    for (let i = 0; i < candidates.length; i++) {
        sorted.push(candidates[i]);
    }

    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - 1; j++) {
            if (sorted[j].voters.length < sorted[j + 1].voters.length) {
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }

    for (let i = 0; i < sorted.length; i++) {
        console.log((i + 1) + ". " + sorted[i].firstname + " " + sorted[i].lastname + " (" + sorted[i].political_party
            + ") - " + sorted[i].voters.length + " vote");
    }
}

function showCandidates(candidates) {
    if (candidates.length === 0) {
        console.log("No candidates to display");
        return;
    }

    for (let i = 0; i < candidates.length; i++) {
        const candidate = candidates[i];
        //console.log(candidates[i])
        console.log("CIN            : " + candidate.CIN);
        console.log("firstname      : " + candidate.firstname);
        console.log("lastname       : " + candidate.lastname);
        console.log("political party: " + candidate.political_party);
        console.log("age            : " + candidate.age);
        console.log("number of votes: " + candidate.voters.length);
    }
}

function display(candidates) {
    let political_party = p("Enter the political party: ");
    let list =[];
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].political_party === political_party) {
            list.push(candidates[i]);
        }
    }
    showCandidates(list);
}

function vote(candidates) {
    let your_CIN = p("enter your CIN: ");
    let candidate_CIN = p("enter the CIN of your candidate: ")

    const candidate = candidates.find(candidate => candidate.CIN === candidate_CIN)
    if (!candidate) {
        console.log("candidate not there");
    }

    let votedAlready = false
    for (let i = 0; i < candidate.length; i++) {
        if (candidate.voters.includes(your_CIN)) {
            votedAlready = true
            return;
        }
    }
    if (votedAlready) {
        console.log("you already voted");
        return;
    }

    candidate.voters.push(your_CIN)
}

function editCandidate(candidates) {
    let CIN = p("enter the CIN of the candidate you want to edit: ");

    let candidate;
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].CIN === CIN) {
            candidate = candidates[i];
            break;
        }
    }

    if (!candidate) {
        console.log("candidate not found");
        return;
    }

    console.log("Current party: " + candidate.political_party);
    console.log("Current age  : " + candidate.age);

    let newParty = p("enter new political party, leave empty to keep current: ");
    let newAge = p("enter new age, leave empty to keep current: ");

    if (newParty !== "") {
        candidate.political_party = newParty;
    }

    if (newAge !== "") {
        newAge = Number(newAge);
        if (isNaN(newAge) || newAge < 21) {
            console.log("Invalid value, Age not changed");
        } else {
            candidate.age = newAge;
        }
    }

    console.log("Candidate updated successfully");
}

function findByName(candidates) {
    let name = p("Enter the firstname or lastname to search: ");

    let found = false;
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].firstname === name || candidates[i].lastname === name) {
            console.log("CIN            : " + candidates[i].CIN);
            console.log("firstname      : " + candidates[i].firstname);
            console.log("lastname       : " + candidates[i].lastname);
            console.log("political party: " + candidates[i].political_party);
            console.log("age            : " + candidates[i].age);
            console.log("number of votes: " + candidates[i].voters.length);
            found = true;
        }
    }
    if (!found) {
        console.log("No candidate found with that name.");
    }
}