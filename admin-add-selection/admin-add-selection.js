document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        // Nasconde la GIF
        document.querySelector('img').style.display = 'none';
        
        // Mostra il messaggio di completamento
        document.getElementById('completionMessage').style.display = 'block';
        
        // Mostra il pulsante "Back to Home"
        document.getElementById('backToHome').style.display = 'block';
    }, 5000);  // 5000 millisecondi = 5 secondi
});

//funzione cambio lingua
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('language');
    const completionMessageText = document.getElementById('completionMessageText');
    const backToHomeButton = document.getElementById('backToHome');

    if (savedLanguage === 'it') {
        completionMessageText.textContent = 'Caricamento Completato';
        backToHomeButton.textContent = 'Torna alla Home';
    } else if (savedLanguage === 'en') {
        completionMessageText.textContent = 'Upload Completed';
        backToHomeButton.textContent = 'Back to Home';
    } else if (savedLanguage === 'fr') {
        completionMessageText.textContent = 'Chargement Terminé';
        backToHomeButton.textContent = 'Retour à l\'Accueil';
    } else if (savedLanguage === 'es') {
        completionMessageText.textContent = 'Carga Completada';
        backToHomeButton.textContent = 'Volver al Inicio';
    } else if (savedLanguage === 'ru') {
        completionMessageText.textContent = 'Загрузка Завершена';
        backToHomeButton.textContent = 'Вернуться на Главную';
    } else if (savedLanguage === 'ch') {
        completionMessageText.textContent = '上传完成';
        backToHomeButton.textContent = '返回主页';
    } else if (savedLanguage === 'dt') {
        completionMessageText.textContent = 'Upload Abgeschlossen';
        backToHomeButton.textContent = 'Zurück zur Startseite';
    } else if (savedLanguage === 'tk') {
        completionMessageText.textContent = 'Yükleme Tamamlandı';
        backToHomeButton.textContent = 'Ana Sayfaya Dön';
    }
});