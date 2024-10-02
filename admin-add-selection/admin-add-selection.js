document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        // Nasconde la GIF
        document.querySelector('img').style.display = 'none';
        
        // Mostra il pulsante "Back to Home"
        document.getElementById('backToHome').style.display = 'block';
    }, 5000);  // 5000 millisecondi = 5 secondi
});
