document.getElementById('languageSelector').addEventListener('change', function() {
    const language = this.value;
    const textElement = document.querySelector('.file-eliminato');
  
    if (language === 'it') {
      textElement.textContent = 'File eliminato correttamente!';
    } else if (language === 'en') {
      textElement.textContent = 'File deleted successfully!';
    } else if (language === 'fr') {
      textElement.textContent = 'Fichier supprimé avec succès!';
    }
    else if(language === 'es') {
        textElement.textContent = '¡Archivo eliminado exitosamente!';
    }
    else if(language === 'ru') 
    {
        textElement.textContent = 'Fișierul a fost șters cu succes!';
    }
    else if(language === 'ch')
    {
        textElement.textContent = '文件刪除成功!';
    }
    else if(language === 'dt')
    {
        textElement.textContent = 'Datei erfolgreich gelöscht!';
    }
    else if(language === 'tk')
    {
      textElement.textContent = 'Dosya başarıyla silindi!';
    }
});