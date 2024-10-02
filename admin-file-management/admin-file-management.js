document.getElementById('languageSelector').addEventListener('change', function() {
    const language = this.value;
    const deleteButton = document.getElementById('deletePdf');
    const modifyPdf = document.getElementById('modifyPdf');
    const addPdf = document.getElementById('addPdf');
  
    if (language === 'it') {
      deleteButton.textContent = 'Cancella';
      modifyPdf.textContent = 'Modifica';
      addPdf.textContent = 'Aggiungi';
    } else if (language === 'en') {
      deleteButton.textContent = 'Delete';
      modifyPdf.textContent = 'Modify';
      addPdf.textContent = 'Add';
    } else if (language === 'fr') {
      deleteButton.textContent = 'Supprimer';
      modifyPdf.textContent = 'Modifier';
      addPdf.textContent = 'Ajouter';
    }
    else if(language === 'es') {
        deleteButton.textContent = 'Borrar';
        modifyPdf.textContent = 'Modificar';
        addPdf.textContent = 'Agregar';
    }
    else if(language === 'ru') 
    {
        deleteButton.textContent = 'удалить';
        modifyPdf.textContent = 'редактировать';
        addPdf.textContent = 'добавлять';
    }
    else if(language === 'ch')
    {
        deleteButton.textContent = '删除';
        modifyPdf.textContent = '编辑';
        addPdf.textContent = '添加';
    }
    else if(language === 'dt')
    {
        deleteButton.textContent = 'Stornieren';
        modifyPdf.textContent = 'Bearbeiten';  
        addPdf.textContent = 'Hinzufügen';
    }
    else if(language === 'tk')
    {
      deleteButton.textContent = 'İptal etmek';
      modifyPdf.textContent = 'Düzenlemek';
      addPdf.textContent = 'Eklemek';
    }
  });