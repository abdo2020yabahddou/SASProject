import promptSync from 'prompt-sync';
const p = promptSync();

export function editCandidate(candidates) {
    let CIN = p("enter the CIN of the candidate you want to edit: ");

    let candidate;
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].CIN === CIN) {
            candidate = candidates[i];
            break;
        }
    }

    if (!candidate) {
        console.log("this candidate isn't in the list");
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
            console.log("Invalid value, age didn't change");
        } else {
            candidate.age = newAge;
        }
    }

    console.log("Candidate updated successfully");
}