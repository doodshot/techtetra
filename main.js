function changeLanguage() {
    var lang = document.getElementById("languageSelector").value;
    var testo = document.getElementById("testo");
    var adminLink = document.getElementById("adminLink");

    if (lang === "en") {
        testo.textContent = "You must first scan the QR Code";
        adminLink.textContent = "Are you an administrator?";
    } else if (lang === "fr") {
        testo.textContent = "Vous devez d'abord scanner le QR Code";
        adminLink.textContent = "Êtes-vous un administrateur ?";
    } else {
        testo.textContent = "Devi prima scansionare il QR Code";
        adminLink.textContent = "Sei un amministratore?";
    }
}
document.getElementById("languageSelector").addEventListener("change", changeLanguage());
