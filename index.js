require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // to accept json data(path.join(__dirname, "public")));

app.get('/',(req, res) => {
    res.send('working');
})
app.post('/users',(req, res) => {
    res.send('users working');
})


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

