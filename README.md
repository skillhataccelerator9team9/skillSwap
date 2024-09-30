# Skill Swap

today

Skill Swap is a full-stack web application where users can sign up, list their skills, and request help for skills they need. They can browse through other users' profiles, see their skills, ratings, and availability, and request a session via the app's built-in chat feature..

## Features

- User sign-up and login functionality.
- Users can list their skills and request help from others.
- A card system displaying skills, provider's introduction, ratings, schedule, and a "Request" button.
- In-app chat for communication and scheduling meetings.
- MongoDB database for storing user data.

## Technologies

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Frontend**: React.js, TypeScript
- **Other**: dotenv for environment variables, CORS for cross-origin requests, Nodemon for development

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/skillhataccelerator9team9/skillSwap.git
   cd skillSwap
   ```

2. **Install dependencies for the backend:**

   Navigate to the `server` directory and install the dependencies:

   ```bash
   cd server
   npm install
   ```

3. **Create a `.env` file:**

   In the `server` directory, create a `.env` file and add the following environment variables:

   ```bash
   PORT=3001
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/SkillSwap?retryWrites=true&w=majority
   ```

   Replace `<username>` and `<password>` with your MongoDB credentials.

4. **Run the server:**

   To start the server in development mode, use:

   ```bash
   npx nodemon server.js
   ```

   The backend should be running at `http://localhost:3001`, and you should see the message `Server running on port 3001` in the terminal.

### Routes

- **GET /:**  
  A simple route that returns "Skill Swap Backend is Running."

### Development Tools

- **Nodemon:** Automatically restarts the server when file changes are detected.

### Future Plans

- Implement user authentication.
- Create user profiles with skills, ratings, and schedules.
- Develop a frontend using React.js.
- Add chat functionality for scheduling skill swaps.

## Contributing

Feel free to fork this repository, create a new branch, and submit a pull request.

## License

This project is licensed under the MIT License.
