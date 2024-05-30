# Average Calculator Frontend

This is the frontend for the Average Calculator microservice, built using React. The frontend interacts with the Flask-based backend to fetch numbers, calculate their average, and display the results.

## Features

- Allows users to request different types of numbers: prime, Fibonacci, even, and random.
- Displays the current and previous state of the number window.
- Shows the average of the numbers in the current window.
- Provides a user-friendly interface with quick responses.

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kumarnavyanth/average-calculator-frontend.git
   cd average-calculator-frontend
   ```

2. **Install the required packages**:

   Using npm:
   ```bash
   npm install
   ```

   Using yarn:
   ```bash
   yarn install
   ```

## Usage

1. **Start the development server**:

   Using npm:
   ```bash
   npm start
   ```

   Using yarn:
   ```bash
   yarn start
   ```

2. **Access the application**:

   Open your browser and navigate to `http://localhost:5000`.

## Project Structure

```
average-calculator-frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── NumberTypeSelector.js
│   │   ├── DisplayWindow.js
│   │   ├── AverageDisplay.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
├── README.md
└── ...
```

## API Endpoints

- **GET `/numbers/<number_type>`**: Fetches numbers from the backend API. Replace `<number_type>` with `p`, `f`, `e`, or `r` to request prime, Fibonacci, even, or random numbers respectively.

## Components

- **NumberTypeSelector**: A dropdown to select the type of numbers to fetch.
- **DisplayWindow**: Displays the current and previous states of the number window.
- **AverageDisplay**: Shows the calculated average of the numbers in the window.

## Example Requests

To fetch prime numbers, use the dropdown to select "Prime" and click the "Fetch Numbers" button.

## Deployment

1. **Build the application**:

   Using npm:
   ```bash
   npm run build
   ```

   Using yarn:
   ```bash
   yarn build
   ```

2. **Deploy the contents of the `build` directory** to your web server.



## Acknowledgments

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [Create React App](https://create-react-app.dev/)





