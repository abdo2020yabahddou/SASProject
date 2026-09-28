import promptSync from 'prompt-sync';
const p = promptSync();

export function findByName(candidates) {
    let name = p("enter the firstname or lastname to search for a candidate: ").trim();
    let nameLower = name.toLowerCase()

    console.log("the search has began");

    let found = false;
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].firstname.toLowerCase() === nameLower || candidates[i].lastname.toLowerCase() === nameLower) {
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
        console.log("No candidate found with this name, try another one");
    }
}