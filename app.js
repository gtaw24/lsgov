// Node.js express server to handle form submission
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

app.post('/logData', (req, res) => {
    const logData = req.body.data;
    fs.appendFile('logs.txt', logData, (err) => {
        if (err) throw err;
        res.send('Logged');
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
