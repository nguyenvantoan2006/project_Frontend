document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        alert("Đăng ký thành công");
        // Chuyển hướng đến trang đăng nhập
        window.location.href = "login.html";
    } else {
        alert("Mật khẩu xác nhận không khớp");
    }
});
