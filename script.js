const params = new URLSearchParams(window.location.hash.slice(1));
const name = params.get("name") || "to all my friends";
document.querySelector(".invite-name").textContent = `Dear ${name} 🌸`;



document.getElementById('mapBtn').addEventListener('click', () => {
    window.open('https://maps.app.goo.gl/EEKoGgwdMPJNjq568', '_blank');
});
