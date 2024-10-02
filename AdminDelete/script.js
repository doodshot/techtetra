function deleteFile(fileId) {
    // Chiedi conferma prima di eliminare
    if (confirm("Sei sicuro di voler eliminare questo file?")) {
        // Trova l'elemento del file
        var fileElement = document.getElementById(fileId);
        
        // Se l'elemento esiste, rimuovilo
        if (fileElement) {
            fileElement.remove();
            console.log("File eliminato:", fileId);
        } else {
            console.log("File non trovato:", fileId);
        }
    } else {
        console.log("Eliminazione annullata");
    }
}