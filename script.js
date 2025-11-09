document.addEventListener("DOMContentLoaded", function() {
    // Lấy tên người nhận từ URL
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name") || "";

    if(name) {
        const h1 = document.querySelector(".invite-name");
        if(h1) {
            h1.textContent = `Dear ${name} 🌸`;
        }
    }


document.getElementById('mapBtn').addEventListener('click', () => {
    window.open('https://maps.app.goo.gl/EEKoGgwdMPJNjq568', '_blank');
});

