// article_detail.js

// Lấy tham số 'id' từ URL
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');

// Dữ liệu bài viết mẫu (Thay thế bằng dữ liệu thực từ backend hoặc cơ sở dữ liệu)
const articles = [
    { id: 1, title: "A Productive Day at Work", date: "2023-02-23", category: "Work & Career", mood: "😊 Happy", content: "Today was a really productive day at work! I made sure to finish my tasks ahead of schedule and received positive feedback..." },
    { id: 2, title: "My First Job Interview Experience", date: "2023-02-22", category: "Personal Thoughts", mood: "😌 Calm", content: "I had my first job interview today! I was nervous at first, but as the conversation went on, I felt more confident..." }
];

// Tìm bài viết theo ID
const article = articles.find(article => article.id == articleId);

// Hiển thị dữ liệu bài viết
if (article) {
    document.getElementById("article-title").textContent = article.title;
    document.getElementById("article-date").textContent = `Date: ${article.date}`;
    document.getElementById("article-category").textContent = `Category: ${article.category}`;
    document.getElementById("article-mood").textContent = `Mood: ${article.mood}`;
    document.getElementById("article-content").textContent = article.content;
} else {
    alert("Article not found!");
}
