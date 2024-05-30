
# Average Calculator Microservice

This is a Flask-based microservice that calculates the average of numbers fetched from a third-party server. The service exposes a REST API at `/numbers/<number_type>` where `number_type` can be `p` for prime numbers, `f` for Fibonacci numbers, `e` for even numbers, or `r` for random numbers.

## Features

- Fetches numbers from a third-party API based on the provided `number_type`.
- Maintains a window of the latest unique numbers fetched.
- Calculates the average of the numbers in the window.
- Ensures responses are provided within 500 milliseconds.
- Returns the state of the number window before and after the latest API call, the fetched numbers, and the average.

## Prerequisites

- Python 3.7 or higher
- Flask
- Requests
- Flask-CORS

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/average-calculator-microservice.git
   cd average-calculator-microservice
   ```

2. **Create and activate a virtual environment**:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the required packages**:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. **Run the Flask application**:

   ```bash
   python app.py
   ```

2. **Access the API**:

   Open your browser or use a tool like `curl` or Postman to make a GET request to:

   ```url
   http://localhost:5000/numbers/<number_type>
   ```

   Replace `<number_type>` with `p`, `f`, `e`, or `r` to fetch prime, Fibonacci, even, or random numbers respectively.

## API Endpoints

- **GET `/numbers/<number_type>`**: Fetches numbers from a third-party API, updates the window of numbers, and calculates the average.

  **Response**:

  ```json
  {
    "windowPrevState": [],
    "windowCurrState": [1, 3, 5, 7],
    "numbers": [1, 3, 5, 7],
    "avg": 4.00
  }
  ```

  **Error Responses**:

  - `400 Bad Request` if the `number_type` is invalid.
  - `500 Internal Server Error` if there is an issue fetching numbers from the third-party service or the request times out.

## Project Structure

```
average-calculator-microservice/
├── app.py
├── requirements.txt
└── README.md
```

## Example Requests

Using `curl` to fetch prime numbers:

```bash
curl http://localhost:5000/numbers/p
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Flask](https://flask.palletsprojects.com/)
- [Requests](https://docs.python-requests.org/)
- [Flask-CORS](https://flask-cors.readthedocs.io/)

```

Ensure you have the `requirements.txt` file in your project root directory containing the necessary Python packages:

```text
Flask
requests
Flask-CORS
```

This `README.md` file provides a detailed guide on how to set up, run, and use your Flask-based microservice.
