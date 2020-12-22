import express from 'express';

const app = express()

const port = process.env.PORT;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Chess app listening at http://localhost:${port}`)
})
