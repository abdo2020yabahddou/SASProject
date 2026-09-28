import promptSync from 'prompt-sync';
const p = promptSync();

export function vote(candidates) {
    let your_CIN = p("enter your CIN: ").trim();
    let age = Number(p("enter your age: ")).trim()
    let candidate_CIN = p("enter the CIN of your candidate: ").trim()

    const candidate = candidates.find(candidate => candidate.CIN === candidate_CIN)
    if (!candidate) {
        console.log("candidate not there");
        return;
    }

    if (candidate.voters.includes(your_CIN)) {
        console.log("you already voted");
            return;
    }
  
    if( isNaN(age) < 18){
        console.log("sorry you can't vote, next time");
        return;
    }
    console.log("You have voted, thank you");
    candidate.voters.push(your_CIN)
}