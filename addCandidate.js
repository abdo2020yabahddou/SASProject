import promptSync from 'prompt-sync';
const p = promptSync();

export function addCandidate(candidates) {
    let CIN = p("write your CIN: ").trim();
    let firstname = p("enter your firstname: ").trim();
    let lastname = p("enter your lastname: ").trim()
    let political_party = p("enter your political party: ").trim()
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