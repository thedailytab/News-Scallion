const articles = []; // Load articles from data file
const users = []; // Load users from data file

// Function to upvote/downvote an article
function vote(articleId, userId, voteType) {
    const article = articles.find(a => a.id === articleId);
    if (voteType === 'upvote') {
        article.upvotes += 1;
    } else {
        article.downvotes += 1;
    }
    // Save changes to data file
}

// Load articles on page load
document.addEventListener('DOMContentLoaded', () => {
    loadArticles();
});

// Function to load articles from the server
function loadArticles() {
    fetch('/articles')
        .then(response => response.json())
        .then(data => {
            const articlesContainer = document.getElementById('articles');
            data.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.summary}</p>
                    <button onclick="vote('article.id′,′{article.id}', 'article.id′,′{currentUser.id}', 'upvote')">Upvote</button>
                    <button onclick="vote('article.id′,′{article.id}', 'article.id′,′{currentUser.id}', 'downvote')">Downvote</button>
                `;
                articlesContainer.appendChild(articleElement);
            });
        });
}
