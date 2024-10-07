localStorage.setItem('language', 'it');
document.getElementById('languageSelector').addEventListener('change', function() {
    const language = this.value;
    const textElement = document.querySelector('.testo');
    const adminLink = document.getElementById('admin-login');
  
    if (language === 'it') {
      localStorage.setItem('language', language);
      textElement.textContent = 'Devi prima scansionare il QR Code';
      adminLink.textContent = 'Sei un amministratore?';
    } else if (language === 'en') {
      localStorage.setItem('language', language);
      textElement.textContent = 'You must scan the QR Code first';
      adminLink.textContent = 'Are you an administrator?';
    } else if (language === 'fr') {
      localStorage.setItem('language', language);
      textElement.textContent = 'Vous devez d\'abord scanner le QR Code';
      adminLink.textContent = 'Êtes-vous administrateur?';
    }
    else if(language === 'es') {
      localStorage.setItem('language', language);
      textElement.textContent = 'Primero debes escanear el código QR';
      adminLink.textContent = '¿Eres administrador?';
    }
    else if(language === 'ru') 
    {
      localStorage.setItem('language', language);
      textElement.textContent = 'Сначала вам нужно сканировать QR код';
      adminLink.textContent = 'Вы - менеджер?';
    }
    else if(language === 'ch')
    {
      localStorage.setItem('language', language);
      textElement.textContent = '您需要先扫描二维码';
      adminLink.textContent = '您是管理员吗？';
    }
    else if(language === 'dt')
    {
      localStorage.setItem('language', language);
      textElement.textContent = 'Sie müssen zuerst den QR-Code scannen';
      adminLink.textContent = 'Sind Sie ein Administrator?';
    }
    else if(language === 'tk')
    {
      localStorage.setItem('language', language);
      textElement.textContent = 'Önce QR kodunu taratmanız gerekiyor';
      adminLink.textContent = 'Yönetici misiniz?';
    }
  });