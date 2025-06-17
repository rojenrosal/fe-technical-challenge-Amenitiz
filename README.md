# ♟️ Chess.com Grandmasters Explorer – Amenitiz Front-end Challenge

This is my solution to the **Amenitiz Front-end Technical Challenge**. The goal was to build a simple front-end wiki for Chess Grandmasters using [Chess.com's public API](https://www.chess.com/news/view/published-data-api), built with **React + TypeScript**.

---

## ✅ Challenge Overview

### ♟️ Step 1: List the Grandmasters
- Fetched the list of all titled Grandmasters from:
GET https://api.chess.com/pub/player/{username}

- Displayed them in a paginated  list.
- Added basic styling and user-friendly navigation using React Router.

### ♟️ Step 2: Grandmaster Profile Page
- Clicking a name on the list navigates to a profile page:

- Player profile shows:
- Player Avatar
- Username and name
- Title, country, FIDE rating
- Streamer and verified badges
- Join date and chess.com profile link

### ♟️ Step 3: Grandmaster Summary – Last Online Clock
- Real-time clock shows how long since the player was last online
- Updates every second using `setInterval`
- Format: `HH:MM:SS ago`

---

##  Known Trade-offs


- ❗ API errors currently log to console; no retry or advanced handling
- ❗ Design is responsive and clean but not optimized for large data sets or caching
- ❗ Did not implement tests due to time constraints

---
## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

---

## 📦 Getting Started

### Prerequisites

- Node.js 
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/chess-grandmasters.git
cd chess-grandmasters

# Install dependencies
npm install

# Start dev server
npm run dev
