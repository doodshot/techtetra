document.addEventListener('DOMContentLoaded', function() {
    const uploadBox = document.getElementById('uploadBox');
    const fileInput = document.getElementById('fileInput');
    const languageSelector = document.getElementById('languageSelector');
    const pageTitle = document.querySelector('h1');
    const uploadText = document.querySelector('.upload-box p');
    const modifyButton = document.querySelector('.modify-btn');

    // Funzione per cambiare la lingua
    function changeLanguage(language) {
        let texts = {
            title: '',
            uploadText: '',
            modifyButton: '',
            alertMessage: ''
        };

        switch(language.toLowerCase()) {
            case 'it':
                texts = {
                    title: 'Inserisci il nuovo PDF',
                    uploadText: 'PDF',
                    modifyButton: 'modifica',
                    alertMessage: 'Per favore, seleziona un file PDF valido.'
                };
                break;
            case 'en':
                texts = {
                    title: 'Insert new PDF',
                    uploadText: 'PDF',
                    modifyButton: 'modify',
                    alertMessage: 'Please select a valid PDF file.'
                };
                break;
            case 'fr':
                texts = {
                    title: 'Insérez le nouveau PDF',
                    uploadText: 'PDF',
                    modifyButton: 'modifier',
                    alertMessage: 'Veuillez sélectionner un fichier PDF valide.'
                };
                break;
            case 'es':
                texts = {
                    title: 'Inserta el nuevo PDF',
                    uploadText: 'PDF',
                    modifyButton: 'modificar',
                    alertMessage: 'Por favor, selecciona un archivo PDF válido.'
                };
                break;
            case 'ru':
                texts = {
                    title: 'Вставьте новый PDF',
                    uploadText: 'PDF',
                    modifyButton: 'изменить',
                    alertMessage: 'Пожалуйста, выберите действительный файл PDF.'
                };
                break;
            case 'ch':
                texts = {
                    title: '插入新的PDF',
                    uploadText: 'PDF',
                    modifyButton: '修改',
                    alertMessage: '请选择有效的PDF文件。'
                };
                break;
            case 'dt':
                texts = {
                    title: 'Neues PDF einfügen',
                    uploadText: 'PDF',
                    modifyButton: 'ändern',
                    alertMessage: 'Bitte wählen Sie eine gültige PDF-Datei aus.'
                };
                break;
            case 'tk':
                texts = {
                    title: 'Yeni PDF ekle',
                    uploadText: 'PDF',
                    modifyButton: 'değiştir',
                    alertMessage: 'Lütfen geçerli bir PDF dosyası seçin.'
                };
                break;
            default:
                texts = {
                    title: 'Insert new PDF',
                    uploadText: 'PDF',
                    modifyButton: 'modify',
                    alertMessage: 'Please select a valid PDF file.'
                };
        }

        pageTitle.textContent = texts.title;
        uploadText.textContent = texts.uploadText;
        modifyButton.textContent = texts.modifyButton;
        window.alertMessage = texts.alertMessage;
    }

    // Evento per il cambio lingua
    languageSelector.addEventListener('change', function() {
        const language = this.value;
        localStorage.setItem('language', language);
        changeLanguage(language);
    });

    // Carica la lingua salvata o usa l'italiano come default
    const savedLanguage = localStorage.getItem('language') || 'it';
    languageSelector.value = savedLanguage;
    changeLanguage(savedLanguage);

    uploadBox.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            console.log('File PDF selezionato:', file.name);
            // Qui puoi aggiungere la logica per gestire il file selezionato
        } else {
            alert(window.alertMessage);
        }
    });
});