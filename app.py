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