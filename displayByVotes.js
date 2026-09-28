import promptSync from 'prompt-sync';
const p = promptSync();

export function showByVotes(candidates) {
    let sorted = [];
    for (let i = 0; i < candidates.length; i++) {
        sorted.push(candidates[i]);
    }

    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - 1; j++) {
            if (sorted[j].voters.length < sorted[j + 1].voters.length) {
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }

    console.log("the results:");
    for (let i = 0; i < sorted.length; i++) {
        console.log((i + 1) + "- " + sorted[i].firstname + " " + sorted[i].lastname + " (" + sorted[i].political_party + ") - "
        + sorted[i].voters.length + " " + (sorted[i].voters.length === 1 ? "vote" : "votes"));
    }
}