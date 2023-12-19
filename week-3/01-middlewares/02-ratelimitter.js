const express = require('express');
const app = express();

app.use(express.json());
let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

function reqLimit(req, res, next) {
    const user_id = req.body.user_id; // Use headers instead of body
    if (!numberOfRequestsForUser[user_id]) {
        numberOfRequestsForUser[user_id] = 0; // Initialize count if not exists
    }

    numberOfRequestsForUser[user_id]++; // Increment count for the user

    if (numberOfRequestsForUser[user_id] > 5) {
        return res.status(404).send("Rate limit exceeded");
    }
    next();
}

app.get('/user', reqLimit, function(req, res) {
    res.status(200).json({ name: 'john' });
});

app.post('/user', reqLimit, function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
