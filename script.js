document.getElementById('topupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const amount = document.getElementById('amount').value;
    const messageDiv = document.getElementById('message');

    messageDiv.innerHTML = `Top up sebesar Rp ${amount} untuk ${username} berhasil!`;
    document.getElementById('topupForm').reset();
});
