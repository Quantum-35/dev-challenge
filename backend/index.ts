import express from 'express';

const app = express();
const port = 3002;

app.get('/', (req, res) => {
    res.send('Welcome Home');
});

app.listen(port, err => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});