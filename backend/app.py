from flask import Flask, jsonify
import sqlite3
from flask_cors import CORS
import os


app = Flask(__name__)
CORS(app)


def get_db():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    db_path = os.path.join(base_dir, "culture.db")
    return sqlite3.connect(db_path)


@app.route("/culture/<location>")
def get_culture(location):
    conn = get_db()
    cur = conn.cursor()
    cur.execute(
        "SELECT category, name, description FROM culture_activities WHERE location=?",
        (location,)
    )
    rows = cur.fetchall()
    conn.close()

    result = []
    for r in rows:
        result.append({
            "category": r[0],
            "name": r[1],
            "description": r[2]
        })
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
