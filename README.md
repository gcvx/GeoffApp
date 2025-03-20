# GeoffApp - React Multi-Page Application

A simple React application with multiple pages and navigation.

## Project Overview

GeoffApp is a React application that demonstrates how to create a multi-page website using React Router. The application consists of three pages:

- **Home**: The landing page of the application
- **About**: Information about the application
- **Contact**: Contact information

## Project Structure

```
geoffapp/
├── package.json        # Project dependencies and scripts
├── public/
│   └── index.html      # HTML template
├── src/
│   ├── App.css         # Application styles
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles
│   ├── index.js        # Application entry point
│   ├── components/
│   │   └── Navigation.jsx  # Navigation component
│   └── pages/
│       ├── About.jsx   # About page component
│       ├── Contact.jsx # Contact page component
│       └── Home.jsx    # Home page component
└── README.md           # This file
```

## Prerequisites

- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository or navigate to the project folder
2. Install dependencies:

```bash
npm install
```

## Running the Application

To start the development server:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

To build the app for production:

```bash
npm run build
```

This builds the app for production to the `build` folder, optimizing the build for the best performance.

## Technologies Used

- React 18
- React Router 6
- CSS3

## Features

- Multi-page application with client-side routing
- Responsive design
- Clean, modular component structure

## License

MIT