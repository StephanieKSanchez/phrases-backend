import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';



const app = express();
app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    req.send('🚀 This is working!')
})

app.get('/phrases', )
app.post('/phrases', )