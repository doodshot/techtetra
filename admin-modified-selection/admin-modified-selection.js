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
        completionMessageText.textContent = 'Modifica completata';
        backToHomeButton.textContent = 'Torna alla Home';
    } else if (savedLanguage === 'en') {
        completionMessageText.textContent = 'Modification completed';
        backToHomeButton.textContent = 'Back to Home';
    } else if (savedLanguage === 'fr') {
        completionMessageText.textContent = 'Modification terminée';
        backToHomeButton.textContent = 'Retour à l\'Accueil';
    } else if (savedLanguage === 'es') {
        completionMessageText.textContent = 'Modificación completada';
        backToHomeButton.textContent = 'Volver al Inicio';
    } else if (savedLanguage === 'ru') {
        completionMessageText.textContent = 'Изменение завершено';
        backToHomeButton.textContent = 'Вернуться на Главную';
    } else if (savedLanguage === 'ch') {
        completionMessageText.textContent = '修改完成';
        backToHomeButton.textContent = '返回主页';
    } else if (savedLanguage === 'dt') {
        completionMessageText.textContent = 'Änderung abgeschlossen';
        backToHomeButton.textContent = 'Zurück zur Startseite';
    } else if (savedLanguage === 'tk') {
        completionMessageText.textContent = 'Düzeltme Tamamlandı';
        backToHomeButton.textContent = 'Ana Sayfaya Dön';
    }
});
