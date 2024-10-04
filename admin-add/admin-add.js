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