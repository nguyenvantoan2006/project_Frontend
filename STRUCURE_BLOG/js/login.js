document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Kiểm tra thông tin đăng nhập (ở đây đơn giản chỉ kiểm tra thủ công)
    if (email === "user@example.com" && password === "password") {
        window.location.href = "../pages/dashboard.html"; // Chuyển hướng đến trang Dashboard
    } else {
        alert("Thông tin đăng nhập không chính xác");
    }
});
