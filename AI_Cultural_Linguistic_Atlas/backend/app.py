
from flask import Flask, jsonify, request, send_from_directory
import os
from pathlib import Path
import csv
import json

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR.parent / "dataset"

app = Flask(__name__, static_folder=str(BASE_DIR.parent / "frontend"))

# Simple in-memory load of CSV data
def load_languages():
    data = []
    csvf = DATA_DIR / "languages.csv"
    if csvf.exists():
        with open(csvf, encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                data.append(row)
    return data

@app.route("/api/languages", methods=["GET"])
def api_languages():
    return jsonify(load_languages())

@app.route("/api/language/<lang_code>", methods=["GET"])
def api_language(lang_code):
    langs = load_languages()
    for l in langs:
        if l.get("code")==lang_code:
            return jsonify(l)
    return jsonify({"error":"not found"}), 404

@app.route("/api/transcribe", methods=["POST"])
def api_transcribe():
    # Mocked transcription: returns a fixed message or filenames
    # In production, this would call Whisper to transcribe uploaded audio
    filename = request.form.get("filename","sample.wav")
    transcription = f"[MOCK TRANSCRIPTION for {filename}] This is a demo transcription."
    return jsonify({"filename": filename, "transcription": transcription})

@app.route("/api/detect", methods=["POST"])
def api_detect():
    text = request.form.get("text","")
    # Mocked language detection: very naive
    if any(ch in text.lower() for ch in ["namaste","namaskaram","namaskaar"]):
        lang="hi"
    elif any(ch in text.lower() for ch in ["vanakkam","nandri"]):
        lang="ta"
    else:
        lang="und"
    return jsonify({"input": text, "predicted": lang})

# Serve frontend static files
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    if path!="" and (BASE_DIR.parent / "frontend" / path).exists():
        return send_from_directory(str(BASE_DIR.parent / "frontend"), path)
    return send_from_directory(str(BASE_DIR.parent / "frontend"), "index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
