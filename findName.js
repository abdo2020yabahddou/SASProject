import promptSync from 'prompt-sync';
const p = promptSync();

export function findByName(candidates) {
    let name = p("enter the firstname or lastname to search for a candidate: ");
    let nameLower = name.toLowerCase

    let found = false;
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].firstname === nameLower || candidates[i].lastname === nameLower) {
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
        console.log("No candidate found with that name");
    }
}