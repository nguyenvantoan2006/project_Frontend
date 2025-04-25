document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.querySelector('input[name="title"]').value;
    const category = document.querySelector('select[name="category"]').value;
    const content = document.querySelector('textarea[name="content"]').value;

    if (title && category && content) {
        alert("Bài viết đã được tạo thành công!");
        // Chuyển hướng đến trang danh sách bài viết hoặc reload trang
        window.location.href = "article_manager.html";
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
});
