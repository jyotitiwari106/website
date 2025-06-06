# Techwix - IT Services Website

A modern, responsive website for an IT services company built with React and Express.

## Features

- Modern and responsive UI using Tailwind CSS
- Complete frontend implementation with React
- Backend API with Express.js
- Contact form with email sending capability
- Multiple page templates including Home, About, Services, Blog, Case Studies, etc.
- Reusable components for consistent design

## Project Structure

- `/src` - Frontend React application
  - `/components` - Reusable UI components
  - `/pages` - Page components
  - `/assets` - Static assets like images
- `/server` - Backend Express.js server
  - `index.js` - Main server file with API endpoints

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation and Setup

1. Clone the repository
   ```
   git clone https://github.com/yourusername/techwix-website.git
   cd techwix-website
   ```

2. Install frontend dependencies
   ```
   npm install
   ```

3. Install backend dependencies
   ```
   cd server
   npm install
   ```

4. Configure environment variables
   - Create a `.env` file in the server directory
   - Copy the contents from `.env.example`
   - Replace with your actual configuration values

### Running the Application

1. Start the backend server
   ```
   cd server
   npm run dev
   ```

2. In a separate terminal, start the frontend development server
   ```
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser

## Deployment

1. Build the frontend
   ```
   npm run build
   ```

2. Set NODE_ENV to production in the server .env file
   ```
   NODE_ENV=production
   ```

3. Start the server which will serve both the API and the static frontend files
   ```
   cd server
   npm start
   ```

## Tech Stack

- **Frontend**:
  - React
  - React Router
  - Tailwind CSS
  - React Icons

- **Backend**:
  - Express.js
  - Node.js
  - Nodemailer

## License

This project is licensed under the MIT License.

## Acknowledgements

- Design inspiration from various IT and tech service websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
