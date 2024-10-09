document.addEventListener('DOMContentLoaded', function() {
    const inputProductionYear = document.getElementById('inputProductionYear');
    
    inputProductionYear.addEventListener('input', function(e) {
        // Rimuove tutti i caratteri non numerici
        let value = this.value.replace(/\D/g, '');
        
        // Limita a 4 cifre
        value = value.slice(0, 4);
        
        // Aggiorna il valore del campo
        this.value = value;
    });
});

document.getElementById('languageSelector').addEventListener('change', function() {
    const language = this.value;
    const btn = document.getElementById('sendButton');
    const inputName = document.getElementById('inputName');
    const inputProductionYear = document.getElementById('inputProductionYear');
    const fileName1 = document.getElementById('fileName1');
    const fileName2 = document.getElementById('fileName2');
    if (language === 'it') {
        localStorage.setItem('language', language);
        btn.textContent = 'Invia';
        inputName.placeholder = 'Nome Macchina';
        inputProductionYear.placeholder = 'Anno di Produzione';
        fileName1.textContent = 'Carica PDF Italiano';
        fileName2.textContent = 'Carica PDF Inglese';
    }
    else if (language === 'en') {
        localStorage.setItem('language', language);
        btn.textContent = 'Send';
        inputName.placeholder = 'Machine Name';
        inputProductionYear.placeholder = 'Production Year';
        fileName1.textContent = 'Upload Italian PDF';
        fileName2.textContent = 'Upload English PDF';
    }
    else if(language === 'fr') {
        localStorage.setItem('language', language);
        btn.textContent = 'Envoyer';
        inputName.placeholder = 'Nom de la machine';
        inputProductionYear.placeholder = 'Année de production';
        fileName1.textContent = 'Télécharger le PDF en français';
        fileName2.textContent = 'Télécharger le PDF en anglais';
    }
    else if(language === 'es') {
        localStorage.setItem('language', language);
        btn.textContent = 'Enviar';
        inputName.placeholder = 'Nombre de la máquina';
        inputProductionYear.placeholder = 'Año de producción';
        fileName1.textContent = 'Subir PDF en español';
        fileName2.textContent = 'Subir PDF en inglés';
    }
    else if(language === 'ru')
    {
        localStorage.setItem('language', language);
        btn.textContent = 'Отправить';
        inputName.placeholder = 'Название машины';
        inputProductionYear.placeholder = 'Год производства';
        fileName1.textContent = 'Загрузить PDF на русском';
        fileName2.textContent = 'Загрузить PDF на английском';
    }
    else if(language === 'ch')
    {
        localStorage.setItem('language', language);
        btn.textContent = '发送';
        inputName.placeholder = '机器名称';
        inputProductionYear.placeholder = '生产年份';
        fileName1.textContent = '上传中文PDF';
        fileName2.textContent = '上传英文PDF';
    }
    else if(language === 'dt')
    {
        localStorage.setItem('language', language);
        btn.textContent = 'Senden';
        inputName.placeholder = 'Maschinenname';
        inputProductionYear.placeholder = 'Produktionsjahr';
        fileName1.textContent = 'Deutsch PDF hochladen';
        fileName2.textContent = 'Englisch PDF hochladen';
    }
    else if(language === 'tk')
    {
        localStorage.setItem('language', language);
        btn.textContent = 'Göndər';
        inputName.placeholder = 'Mashinanın adı';
        inputProductionYear.placeholder = 'İstehsal ili';
        fileName1.textContent = 'Azərbaycanca PDF yüklə';
        fileName2.textContent = 'Ingiliscə PDF yüklə';
    }
});

//funzione cambio lingua
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('language');
    const btn = document.getElementById('sendButton');
    const inputName = document.getElementById('inputName');
    const inputProductionYear = document.getElementById('inputProductionYear');
    const fileInput1 = document.getElementById('fileInput1');
    const fileInput2 = document.getElementById('fileInput2');
    if (savedLanguage === 'it') {
        btn.textContent = 'Invia';
        inputName.placeholder = 'Nome Macchina';
        inputProductionYear.placeholder = 'Anno di Produzione';
        fileInput1.placeholder = 'Carica PDF Italiano';
        fileInput2.placeholder = 'Carica PDF Inglese';
    } else if (savedLanguage === 'en') {
        btn.textContent = 'Send';
        inputName.placeholder = 'Machine Name';
        inputProductionYear.placeholder = 'Production Year';
        fileInput1.placeholder = 'Upload Italian PDF';
        fileInput2.placeholder = 'Upload English PDF';
    } else if (savedLanguage === 'fr') {
        btn.textContent = 'Envoyer';
        inputName.placeholder = 'Nom de la machine';
        inputProductionYear.placeholder = 'Année de production';
        fileInput1.placeholder = 'Télécharger le PDF en français';
        fileInput2.placeholder = 'Télécharger le PDF en anglais';
    }
    else if(savedLanguage === 'es') {
        btn.textContent = 'Enviar';
        inputName.placeholder = 'Nombre de la máquina';
        inputProductionYear.placeholder = 'Año de producción';
        fileInput1.placeholder = 'Subir PDF en español';
        fileInput2.placeholder = 'Subir PDF en inglés';
    }
    else if(savedLanguage === 'ru')
    {
        btn.textContent = 'Отправить';
        inputName.placeholder = 'Название машины';
        inputProductionYear.placeholder = 'Год производства';
        fileInput1.placeholder = 'Загрузить PDF на русском';
        fileInput2.placeholder = 'Загрузить PDF на английском';
    }
    else if(savedLanguage === 'ch')
    {
        btn.textContent = '发送';
        inputName.placeholder = '机器名称';
        inputProductionYear.placeholder = '生产年份';
        fileInput1.placeholder = '上传中文PDF';
        fileInput2.placeholder = '上传英文PDF';
    }
    else if(savedLanguage === 'dt')
    {
        btn.textContent = 'Senden';
        inputName.placeholder = 'Maschinenname';
        inputProductionYear.placeholder = 'Produktionsjahr';
        fileInput1.placeholder = 'Deutsch PDF hochladen';
        fileInput2.placeholder = 'Englisch PDF hochladen';
    }
    else if(savedLanguage === 'tk')
    {
        btn.textContent = 'Göndər';
        inputName.placeholder = 'Mashinanın adı';
        inputProductionYear.placeholder = 'İstehsal ili';
        fileInput1.placeholder = 'Azərbaycanca PDF yüklə';
        fileInput2.placeholder = 'Ingiliscə PDF yüklə';
    }
});

document.getElementById('fileInput1').addEventListener('change', function(e) {
    var fileName = e.target.files[0] ? e.target.files[0].name : 'Nessun file selezionato';
    document.getElementById('fileName1').textContent = fileName;
});

document.getElementById('fileInput2').addEventListener('change', function(e) {
    var fileName = e.target.files[0] ? e.target.files[0].name : 'Nessun file selezionato';
    document.getElementById('fileName2').textContent = fileName;
});