import {findByName} from './findName.js';
import {editCandidate} from  './editCandidate.js';
import { vote } from './vote.js';
import { display } from './displayCanByParty.js';
import { showByVotes } from './displayByVotes.js';
import { addCandidate } from './addCandidate.js';
import promptSync from 'prompt-sync';

const p = promptSync()

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