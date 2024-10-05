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
    const fileInput1 = document.getElementById('fileInput1');
    const fileInput2 = document.getElementById('fileInput2');
    if (language === 'it') {
        btn.textContent = 'Invia';
        inputName.placeholder = 'Nome Macchina';
        inputProductionYear.placeholder = 'Anno di Produzione';
        fileInput1.placeholder = 'Carica PDF Italiano';
        fileInput2.placeholder = 'Carica PDF Inglese';
    }
    else if (language === 'en') {
        btn.textContent = 'Send';
        inputName.placeholder = 'Machine Name';
        inputProductionYear.placeholder = 'Production Year';
        fileInput1.placeholder = 'Upload Italian PDF';
        fileInput2.placeholder = 'Upload English PDF';
    }
    else if(language === 'fr') {
        btn.textContent = 'Envoyer';
        inputName.placeholder = 'Nom de la machine';
        inputProductionYear.placeholder = 'Année de production';
        fileInput1.placeholder = 'Télécharger le PDF en français';
        fileInput2.placeholder = 'Télécharger le PDF en anglais';
    }
    else if(language === 'es') {
        btn.textContent = 'Enviar';
        inputName.placeholder = 'Nombre de la máquina';
        inputProductionYear.placeholder = 'Año de producción';
        fileInput1.placeholder = 'Subir PDF en español';
        fileInput2.placeholder = 'Subir PDF en inglés';
    }
    else if(language === 'ru')
    {
        btn.textContent = 'Отправить';
        inputName.placeholder = 'Название машины';
        inputProductionYear.placeholder = 'Год производства';
        fileInput1.placeholder = 'Загрузить PDF на русском';
        fileInput2.placeholder = 'Загрузить PDF на английском';
    }
    else if(language === 'ch')
    {
            btn.textContent = '发送';
        inputName.placeholder = '机器名称';
        inputProductionYear.placeholder = '生产年份';
        fileInput1.placeholder = '上传中文PDF';
        fileInput2.placeholder = '上传英文PDF';
    }
    else if(language === 'dt')
    {
        btn.textContent = 'Senden';
        inputName.placeholder = 'Maschinenname';
        inputProductionYear.placeholder = 'Produktionsjahr';
        fileInput1.placeholder = 'Deutsch PDF hochladen';
        fileInput2.placeholder = 'Englisch PDF hochladen';
    }
    else if(language === 'tk')
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