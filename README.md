# Random Cat Profile Viewer

A modern, responsive React application that fetches and displays detailed, beautiful profiles of random cat breeds. Built with Vite, React, and styled elegantly with Tailwind CSS.

## Features

- **Random Cat Discovery**: Fetches random cat data from an external API and displays comprehensive information.
- **Modular Component Architecture**: Built using highly reusable and focused React components.
- **Modern UI/UX**: Clean layout with hover effects, gradient overlays, and dynamic stats visualization.
- **Responsive Design**: Flawless experience across desktop, tablet, and mobile devices.
- **Dark Mode Ready**: Fully supports tailwind's dark mode out of the box.
- **Dynamic Stats Display**: Visual representation of cat traits (e.g., Intelligence, Adaptability) using custom stat bars.

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Data Source**: [FreeAPI](https://api.freeapi.app/api/v1/public/cats/cat/random)

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/Asutosh-1234/react-project-4.git
   cd react-project-4
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   This will start a local server, typically accessible at `http://localhost:5173`.

### Building for Production
To create an optimized production build:
```bash
npm run build
```
You can then preview the production build using `npm run preview`.

## Architecture & Components

The application UI is broken down into small, highly reusable pieces located in `src/components/`:

- **`CatCard/index.jsx`**: The main orchestration component that wraps all the subcomponents into a unified card layout.
- **`CatCard/CatImage.jsx`**: Manages the main profile image, including gradient overlays and origin badging.
- **`CatCard/CatHeader.jsx`**: Displays the cat's primary information like name, alternate names, lifespan, and weight.
- **`CatCard/CatStats.jsx`**: Iterates over cat attributes (e.g., adaptability, energy level) and displays them using the `StatBar` component.
- **`CatCard/CatLinks.jsx`**: Renders external resources (Wikipedia, Vetstreet, etc.) with animated hover effects.
- **`ui/Badge.jsx`**: A generic, reusable pill-shaped component used for temperament tags.
- **`ui/StatBar.jsx`**: A generic progress bar component that visualizes a value out of a maximum (default 5).

## Folder Structure

```text
src/
├── components/
│   ├── CatCard/
│   │   ├── index.jsx
│   │   ├── CatImage.jsx
│   │   ├── CatHeader.jsx
│   │   ├── CatStats.jsx
│   │   └── CatLinks.jsx
│   └── ui/
│       ├── Badge.jsx
│       └── StatBar.jsx
├── App.jsx           # Main application state and data fetching logic
├── index.css         # Global styles and Tailwind imports
└── main.jsx          # React application entry point
```

## License
This project is open-source and available under the MIT License.
