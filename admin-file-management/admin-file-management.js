document.getElementById('languageSelector').addEventListener('change', function() {
    const language = this.value;
    const deleteButton = document.getElementById('deletePdf');
    const modifyPdf = document.getElementById('modifyPdf');
    const addPdf = document.getElementById('addPdf');
  
    if (language === 'it') {
      localStorage.setItem('language', language);
      deleteButton.textContent = 'Cancella';
      modifyPdf.textContent = 'Modifica';
      addPdf.textContent = 'Aggiungi';
    } else if (language === 'en') {
      localStorage.setItem('language', language);
      deleteButton.textContent = 'Delete';
      modifyPdf.textContent = 'Modify';
      addPdf.textContent = 'Add';
    } else if (language === 'fr') {
      localStorage.setItem('language', language);
      deleteButton.textContent = 'Supprimer';
      modifyPdf.textContent = 'Modifier';
      addPdf.textContent = 'Ajouter';
    }
    else if(language === 'es') {
        localStorage.setItem('language', language);
        deleteButton.textContent = 'Borrar';
        modifyPdf.textContent = 'Modificar';
        addPdf.textContent = 'Agregar';
    }
    else if(language === 'ru') 
    {
        localStorage.setItem('language', language);
        deleteButton.textContent = 'удалить';
        modifyPdf.textContent = 'редактировать';
        addPdf.textContent = 'добавлять';
    }
    else if(language === 'ch')
    {
        localStorage.setItem('language', language);
        deleteButton.textContent = '删除';
        modifyPdf.textContent = '编辑';
        addPdf.textContent = '添加';
    }
    else if(language === 'dt')
    {
        localStorage.setItem('language', language);
        deleteButton.textContent = 'Stornieren';
        modifyPdf.textContent = 'Bearbeiten';  
        addPdf.textContent = 'Hinzufügen';
    }
    else if(language === 'tk')
    {
      localStorage.setItem('language', language);
      deleteButton.textContent = 'İptal etmek';
      modifyPdf.textContent = 'Düzenlemek';
      addPdf.textContent = 'Eklemek';
    }
});

//funzione cambio lingua
document.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('language');
  const deleteButton = document.getElementById('deletePdf');
  const modifyPdf = document.getElementById('modifyPdf');
  const addPdf = document.getElementById('addPdf');
  if (savedLanguage === 'it') {
    deleteButton.textContent = 'Cancella';
    modifyPdf.textContent = 'Modifica';
    addPdf.textContent = 'Aggiungi';
    option.textContent = 'IT';
  } else if (savedLanguage === 'en') {
    deleteButton.textContent = 'Delete';
    modifyPdf.textContent = 'Modify';
    addPdf.textContent = 'Add';
    option.textContent = 'EN';
  } else if (savedLanguage === 'fr') {
    deleteButton.textContent = 'Supprimer';
    modifyPdf.textContent = 'Modifier';
    addPdf.textContent = 'Ajouter';
    option.textContent = 'FR';
  } else if (savedLanguage === 'es') {
    deleteButton.textContent = 'Borrar';
    modifyPdf.textContent = 'Modificar';
    addPdf.textContent = 'Agregar';
    option.textContent = 'ES';
  } else if (savedLanguage === 'ru') {
    deleteButton.textContent = 'удалить';
    modifyPdf.textContent = 'редактировать';
    addPdf.textContent = 'добавлять';
    option.textContent = 'RU';
  } else if (savedLanguage === 'ch') {
    deleteButton.textContent = '删除';
    modifyPdf.textContent = '编辑';
    addPdf.textContent = '添加';
    option.textContent = 'CH';
  } else if (savedLanguage === 'dt') {
    deleteButton.textContent = 'Stornieren';
    modifyPdf.textContent = 'Bearbeiten';  
    addPdf.textContent = 'Hinzufügen';
    option.textContent = 'DT';
  } else if (savedLanguage === 'tk') {
    deleteButton.textContent = 'İptal etmek';
    modifyPdf.textContent = 'Düzenlemek';
    addPdf.textContent = 'Eklemek';
    option.textContent = 'TK';
  }
});