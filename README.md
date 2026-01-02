# 🎄 Holiday Wishes AI

A beautiful, AI-powered application for generating personalized holiday greeting cards.

## ✨ Features

- **Multi-Holiday Support**: Christmas, New Year, Halloween, and more.
- **AI-Powered**: Uses OpenAI (GPT-3.5) to write unique, creative messages.
- **Customizable**: Choose tones (Sincere, Funny, Haiku) and languages (English, Russian).
- **High-Quality Export**: Download cards as high-resolution PNGs with meaningful filenames.
- **Premium Design**: Solid, high-contrast themes optimized for readability.

## 🚀 Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Setup API Key**
    - Duplicate `.env.example` and rename it to `.env`.
    - Open `.env` and paste your OpenAI API Key:
      ```env
      VITE_OPENAI_API_KEY=sk-your-openai-api-key
      ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

3.  **Open in Browser**
    Visit `http://localhost:5173`

## ⚙️ Configuration Guide

Customize the app by editing these specific files:

### 1. Holidays, Colors, & Translations
**File**: `src/constants.js`

-   **Add a Holiday**: Add an entry to the `HOLIDAYS` array.
-   **Translations**: Add English/Russian greetings to the `HEADERS` object.
-   **Colors**: Define the background/accent colors in the `THEMES` object.

### 2. Prompts & Wish Length
**File**: `src/App.jsx`

-   **Edit Prompt**: Search for `const prompt =` inside the `handleGenerate` function.
-   **Word Count**: You can adjust the "under 60 words" limit here to save tokens or generate longer messages.

### 3. Global Styles
**File**: `src/index.css`

-   **Fonts**: Change the font family here.
-   **Base Colors**: Edit text/background variables if needed.

## 🛠️ Tech Stack

-   **Frontend**: React + Vite
-   **Styling**: Pure CSS (Variables for theming)
-   **AI**: OpenAI API
-   **Export**: html2canvas

---
*Built with Magic by Antigravity* 🌌
