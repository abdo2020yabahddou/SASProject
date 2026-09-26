import promptSync from 'prompt-sync';
const p = promptSync();

export function vote(candidates) {
    let your_CIN = p("enter your CIN: ");
    let age = Number(p("enter your age: "))
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

    if(age < 18){
        console.log("sorry you can't vote, next time");
        
    }
    candidate.voters.push(your_CIN)
}