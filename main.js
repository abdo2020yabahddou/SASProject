import { findByName } from './findName.js';
import {editCandidate} from  './editCandidate.js';
import { vote } from './vote.js';
import { display } from './displayCandidateByParty.js';
import { showByVotes } from './displayByVotes.js';
import { addCandidate } from './addCandidate.js';
import { deleteCandidate } from './deleteCandidate.js';
import promptSync from 'prompt-sync';

const p = promptSync()

const candidates = [
    { CIN: "PA124732",firstname: "Ahmed",lastname: "katir",political_party: "PAM",age: 45,voters: ["PA983417", "PA561234"]},
    { CIN: "IU784512",firstname: "Salma",lastname: "Salmi",political_party: "PJD",age: 38,voters: ["IU673212"]},
    { CIN: "DO564732",firstname: "Soad",lastname: "khilan",political_party: "PAM",age: 56,voters: ["DO564732"]}
]

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
    console.log("8. find a candidate");
    console.log("9. delete a candidate");
    


    let choice = Number(p("Enter a number between 0 and 9: "))

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
            console.log("Done");
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
            console.log("the results:");
            console.log(candidates)
            break;

        case 7:
            console.log("start editing:");
            editCandidate(candidates)
            break

        case 8:
            findByName(candidates)
            break;

        case 9:
            deleteCandidate(candidates)
            break;    

        case 0:
            isRunning = false
            console.log("Quiting");
            break;

        default:
            console.log("please enter a new number between 0 and 9");
            break;
    }
}