import promptSync from 'prompt-sync';
const p = promptSync();

export function deleteCandidate(candidates) {
    let CIN = p("Enter the CIN of the candidate to delete: ").trim();

    let index = -1;
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].CIN === CIN) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log("Candidate not found");
        return;
    }

    for (let i = index; i < candidates.length - 1; i++) {
        candidates[i] = candidates[i + 1];
    }

    candidates.length = candidates.length - 1;
    console.log("Candidate deleted, try add another one");
}
