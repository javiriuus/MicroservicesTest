from flask import Flask, jsonify
import psycopg2
import os

app = Flask(__name__)

def connect_db():
    conn = psycopg2.connect(os.getenv('DB_CONN_STR'))
    return conn

@app.route('/products')
def get_products():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, price FROM products")
    products = cursor.fetchall()
    
    product_list = []
    for product in products:
        product_dict = {
            "id": product[0],
            "name": product[1],
            "price": product[2]
        }
        product_list.append(product_dict)
    
    conn.close()
    return jsonify(product_list)

if __name__ == '__main__':
    port = int(os.getenv("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
