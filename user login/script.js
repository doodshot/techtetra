document.getElementById('languageSelector').addEventListener('change', function() {
    const language = this.value;
    const textElement = document.getElementById('Qr-user');
    const adminLink = document.getElementById('submit-button');
  
    if (language === 'it') {
      textElement.textContent = 'Vuoi scansionare nuovamente il QR?';
      adminLink.textContent = 'Invia';
    } else if (language === 'en') {
      textElement.textContent = 'You need to scan the QR code again';
      adminLink.textContent = 'submit';
    } else if (language === 'fr') {
      textElement.textContent = 'Vous devez scanner à nouveau le code QR';
      adminLink.textContent = 'Envoyer';
    }
    else if(language === 'es') {
        textElement.textContent = 'Debes escanear el código QR de nuevo';
        adminLink.textContent = 'Enviar';
    }
    else if(language === 'ru') 
    {
        textElement.textContent = 'Сначала вам нужно сканировать QR код';
        adminLink.textContent = 'Отправить';
    }
    else if(language === 'ch')
    {
        textElement.textContent = '您需要再次扫描二维码';
        adminLink.textContent = '发送';
    }
    else if(language === 'dt')
    {
        textElement.textContent = 'Sie müssen den QR-Code erneut scannen';
        adminLink.textContent = 'Senden';
    }
    else if(language === 'tk')
    {
      textElement.textContent = 'QR kodunu yeniden taramanız gerekiyor';
      adminLink.textContent = 'Gönder';
    }
  });

  var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: 1500 
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});