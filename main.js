const p = require(`prompt-sync`)()

const candidates = [{
    CIN: "PA124732",
    firstname: "Ahmed",
    lastname: "katir",
    political_party: "PAM",
    age: 45,
    voters: []
}]

console.log("1. add a new candidate");
console.log("2. add multiple candidates");
console.log("3. show the full list");


let choice = Number(p("Enter a number between 1 and 3: "))

switch(choice){
    case 1:
        addCandidate(candidates)    
        console.log("Done");
        break;

    case 2:
        let number = Number(p("How many candidates? "));
        for (let i = 0; i < number; i++) {
            addCandidate(candidates);
        }
        break;
    
    case 3:
        console.log(candidates);
        break;

    default:
        console.log("please enter a new number between 1 and 3");
        break;  
}

function addCandidate(candidates){
    let CIN = p("write your CIN: ");
    let firstname = p("enter your firstname: ");
    let lastname = p("enter your lastname: ")
    let political_party = p("enter your political party: ")
    let age = p("enter your age: ")

    if (!CIN || !firstname || !lastname || !political_party || isNaN(age)) {
        console.log("please fill in all the fields");
        return;
    }

    if (age < 21) {
        console.log("sorry, You can't be a candidate");
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
        console.log("This CIN already exists.");
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
        
    candidates.push(newCandidate);;
}