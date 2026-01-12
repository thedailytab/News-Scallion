const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Load data from JSON files
let articles = require('./data/articles.json');
let users = require('./data/users.json');
let messages = require('./data/messages.json');

// Function to generate AI summaries
function generateSummary(article) {
    // Implement AI summarization logic here
}

// Endpoint to get articles
app.get('/articles', (req, res) => {
    res.json(articles);
});

// Endpoint to post messages
app.post('/contact', (req, res) => {
    const newMessage = req.body;
    messages.push(newMessage);
    fs.writeFileSync('./data/messages.json', JSON.stringify(messages));
    res.status(201).send('Message sent!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
