import promptSync from 'prompt-sync';
const p = promptSync();

function showCandidates(candidates) {
    if (candidates.length === 0) {
        console.log("No candidates to see");
        return;
    }

    for (let i = 0; i < candidates.length; i++) {
        const candidate = candidates[i];
        console.log("CIN            : " + candidate.CIN);
        console.log("firstname      : " + candidate.firstname);
        console.log("lastname       : " + candidate.lastname);
        console.log("political party: " + candidate.political_party);
        console.log("age            : " + candidate.age);
        console.log("number of votes: " + candidate.voters.length);
    }
}

export function display(candidates) {
    let political_party = p("enter the party name: ");
    let list =[];
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].political_party === political_party) {
            list.push(candidates[i]);
        }
    }
    showCandidates(list);
}