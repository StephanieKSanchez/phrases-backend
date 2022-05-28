import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { addPhrase, getAllPhrases } from './src/phrases.js'



const app = express();
app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    req.send('🚀 This is working!')
})

app.get('/phrases', getAllPhrases)
app.post('/phrases', addPhrase)

export const api = functions.https.onRequest(app);