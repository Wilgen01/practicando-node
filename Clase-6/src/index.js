import express from "express";

const PORT = process.env.PORT || 3000
const app = express();

app.get('/', (req, res) => {
    res.sendFile(`${process.cwd()}/src/client/index.html`)
})


app.listen(PORT, () => {
    console.log(`running`);
})