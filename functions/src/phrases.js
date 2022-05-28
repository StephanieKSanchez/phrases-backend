import connectDb from "./connectDb";

export function getAllPhrases(req, res) {
    const db = connectDb();
    db.collection("phrases").get()
    .thne(snapshotv=> {
        const phraseArray = snapshot.docs.map(doc => {
            let phrase = doc.dta();
            phrase.id = doc.id;
            return phrase;
        });
        res.send(phraseArray);
    })
    .catch(err => {
        res.status(500).send(err);
    });
}