from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import time

app = Flask(__name__)
CORS(app)

WINDOW_SIZE = 10
numbers_window = []

# Third-party API URLs
TEST_SERVER_API_URLS = {
    'p': 'http://20.244.56.144/test/primes',
    'f': 'http://20.244.56.144/test/fibonacci',
    'e': 'http://20.244.56.144/test/evens',
    'r': 'http://20.244.56.144/test/random'
}

def fetch_numbers(number_type):
    try:
        response = requests.get(TEST_SERVER_API_URLS[number_type], timeout=0.5)
        if response.status_code == 200:
            return response.json()['numbers']
    except requests.RequestException:
        return []

def calculate_average(numbers):
    return sum(numbers) / len(numbers) if numbers else 0

@app.route('/numbers/<string:number_type>', methods=['GET'])
def get_numbers(number_type):
    if number_type not in TEST_SERVER_API_URLS:
        return jsonify({'error': 'Invalid number type'}), 400

    start_time = time.time()
    
    new_numbers = fetch_numbers(number_type)
    
    if not new_numbers:
        return jsonify({'error': 'Failed to fetch numbers from third-party service'}), 500

    unique_new_numbers = [num for num in new_numbers if num not in numbers_window]
    
    window_prev_state = numbers_window.copy()

    numbers_window.extend(unique_new_numbers)
    if len(numbers_window) > WINDOW_SIZE:
        numbers_window = numbers_window[-WINDOW_SIZE:]

    window_curr_state = numbers_window.copy()
    average = calculate_average(numbers_window)

    elapsed_time = time.time() - start_time
    if elapsed_time > 0.5:
        return jsonify({'error': 'Request timed out'}), 500

    return jsonify({
        'windowPrevState': window_prev_state,
        'windowCurrState': window_curr_state,
        'numbers': new_numbers,
        'avg': round(average, 2)
    })

if __name__ == '__main__':
    app.run(port=5000)
