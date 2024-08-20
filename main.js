async function checkUsername() {
    const username = document.getElementById('check-input').value;
    const result = document.getElementById('result');
    const message = document.getElementById('message');

    if (username.length < 2) {
        message.textContent = 'Please enter a username with at least 2 characters.';
        setTimeout(() => {
            message.textContent = "";
        }, 3000);
        return;
    }

    result.innerHTML = `
        <h3>Instagram: <span>Checking...</span></h3>
        <h3>GitHub: <span>Checking...</span></h3>
        <h3>Tiktok: <span>Checking...</span></h3>
    `;
}
