FRONTEND












BACKEND AND DB 

Per collegare il tuo database SQLite al tuo progetto web,
 puoi utilizzare un backend che gestisce le richieste HTTP 
 e interagisce con il database. 
 Un'opzione comune è utilizzare un framework web come Flask (per Python) 
 per creare un'API che il tuo frontend può chiamare. 
 Ecco una guida passo-passo su come farlo:

 1. Configurare Flask
Prima di tutto, assicurati di avere Flask installato. Puoi installarlo usando pip:
Bash
pip install flask

2. Creare un'API con Flask
Crea un file Python per il tuo server Flask, ad esempio app.py:
from flask import Flask, jsonify, request
import sqlite3

app = Flask(__name__)

# Funzione per connettersi al database
def get_db_connection():
    conn = sqlite3.connect('local_database.db')
    conn.row_factory = sqlite3.Row
    return conn

# Endpoint per ottenere tutti i PDF
@app.route('/pdfs', methods=['GET'])
def get_pdfs():
    conn = get_db_connection()
    pdfs = conn.execute('SELECT * FROM pdf_documents').fetchall()
    conn.close()
    return jsonify([dict(pdf) for pdf in pdfs])

# Endpoint per ottenere PDF per lingua
@app.route('/pdfs/<language>', methods=['GET'])
def get_pdfs_by_language(language):
    conn = get_db_connection()
    pdfs = conn.execute('SELECT * FROM pdf_documents WHERE language = ?', (language,)).fetchall()
    conn.close()
    return jsonify([dict(pdf) for pdf in pdfs])

if __name__ == '__main__':
    app.run(debug=True)


3. Avviare il Server
Esegui il server Flask:
python app.py

4. Collegare il Frontend
Nel tuo progetto web, 
puoi utilizzare JavaScript per fare richieste HTTP al tuo server Flask. 
Ecco un esempio di come fare una richiesta per ottenere i PDF:

fetch('http://localhost:5000/pdfs')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Puoi ora utilizzare i dati per aggiornare il tuo frontend
    })
    .catch(error => console.error('Errore:', error));

SPIEGAZIONE
Flask: È un micro-framework per Python che ti permette di creare applicazioni web e API.
API Endpoints: Gli endpoint /pdfs e /pdfs/<language> ti permettono di ottenere tutti i PDF o i PDF filtrati per lingua.
JavaScript Fetch: Utilizzato per fare richieste HTTP al server Flask dal tuo frontend.
Assicurati che il tuo server Flask sia in esecuzione 
e che il tuo frontend sia configurato per fare richieste
 al giusto indirizzo (ad esempio, http://localhost:5000).