// Lấy tên từ URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "";

// Thay chỗ … bằng tên
if (name) {
    const h1 = document.querySelector(".invite-name");
    h1.textContent = `Dear ${name} 🌸`;
}


document.getElementById('mapBtn').addEventListener('click', () => {
    window.open('https://maps.app.goo.gl/EEKoGgwdMPJNjq568', '_blank');
});
