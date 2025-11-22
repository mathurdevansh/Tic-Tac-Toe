# Tic Tac Toe AI

A modern, full-stack Tic Tac Toe web application featuring multiple difficulty levels, including an Expert mode powered by Groq AI.

## Features

- **Frontend**: React, Vite, TailwindCSS, Framer Motion.
- **Backend**: Node.js, Express, MongoDB, Groq SDK.
- **Game Modes**:
  - **Easy**: Random moves.
  - **Medium**: Mix of Minimax and random.
  - **Hard**: Minimax algorithm.
  - **Expert**: AI powered by Groq API (LLM).
- **Leaderboard**: Tracks match history in MongoDB.
- **Responsive Design**: Mobile-friendly UI with animations.

## Setup

1.  **Prerequisites**:
    - Node.js installed.
    - MongoDB running (local or Atlas).
    - Groq API Key (for Expert mode).

2.  **Installation**:
    ```bash
    # Install root dependencies (frontend + dev tools)
    npm install

    # Install backend dependencies
    cd backend
    npm install
    cd ..
    ```

3.  **Configuration**:
    - Create a `.env` file in the `backend` directory:
      ```env
      MONGO_URI=mongodb://localhost:27017/tictactoe
      PORT=5000
      GROQ_API_KEY=your_groq_api_key_here
      ```

4.  **Running the App**:
    ```bash
    npm run dev
    ```
    This command uses `concurrently` to start both the Vite frontend (port 5173) and Express backend (port 5000).

## Project Structure

- `src/`: Frontend React code.
  - `components/`: Reusable UI components.
  - `pages/`: Application pages.
  - `game/`: Game logic.
- `backend/`: Backend Node.js code.
  - `models/`: Mongoose models.
  - `routes/`: API endpoints.
  - `services/`: External services (Groq).
  - `utils/`: Helper functions (Minimax).

## API Endpoints

- `POST /api/ai/move`: Get the next move for the AI.
- `POST /api/match`: Save match result.
- `GET /api/leaderboard`: Get recent matches.

## License

MIT
