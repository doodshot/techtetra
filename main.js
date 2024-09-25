document.getElementById('languageSelector').addEventListener('change', function() {
    const language = this.value;
    const textElement = document.querySelector('.testo');
    const adminLink = document.getElementById('admin-login');
  
    if (language === 'it') {
      textElement.textContent = 'Devi prima scansionare il QR Code';
      adminLink.textContent = 'Sei un amministratore?';
    } else if (language === 'en') {
      textElement.textContent = 'You must scan the QR Code first';
      adminLink.textContent = 'Are you an administrator?';
    } else if (language === 'fr') {
      textElement.textContent = 'Vous devez d\'abord scanner le QR Code';
      adminLink.textContent = 'Êtes-vous administrateur?';
    }
    else if(language === 'es') {
        textElement.textContent = 'Primero debes escanear el código QR';
        adminLink.textContent = '¿Eres administrador?';
    }
    else if(language === 'ru') 
    {
        textElement.textContent = 'Сначала вам нужно сканировать QR код';
        adminLink.textContent = 'Вы - менеджер?';
    }
    else if(language === 'ch')
    {
        textElement.textContent = '您需要先扫描二维码';
        adminLink.textContent = '您是管理员吗？';
    }
    else if(language === 'dt')
    {
        textElement.textContent = 'Sie müssen zuerst den QR-Code scannen';
        adminLink.textContent = 'Sind Sie ein Administrator?';
    }
    else if(language === 'tk')
    {
      textElement.textContent = 'Önce QR kodunu taratmanız gerekiyor';
      adminLink.textContent = 'Yönetici misiniz?';
    }
  });