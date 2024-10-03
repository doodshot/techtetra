document.getElementById('languageSelector').addEventListener('change', function() {
    const language = this.value;
    const title = document.querySelector('.title');

    // Oggetto con le traduzioni
    const translations = {
        'it': 'Seleziona un file',
        'en': 'Select a file',
        'fr': 'Sélectionner un fichier',
        'es': 'Seleccionar un archivo',
        'ru': 'Выберите файл',
        'ch': '选择文件', // Corretto per il cinese
        'dt': 'Wählen Sie eine Datei aus',
        'tk': 'Bir dosya seçin' // Corretto per il turco
    };

    // Imposta il testo e gli stili
    title.textContent = translations[language] || 'Select a file';
});