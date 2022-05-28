import connectDb from "./connectDb.js";

export function getAllPhrases(req, res) {
    const db = connectDb();
    db.collection("phrases").get()
    .then(snapshotv=> {
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
export function addPhrase(req, res) {
    if(!req.body){
        res.status(401).send('Invalid request');
        return;
    }
    const db = connectDb();
    db.collection('phrases').add(req.body)
    .then(doc => {
        res.send('New phrase added' + doc.id)
    })
    .catch(err => {
        res.status(500).send(err);
    });
}