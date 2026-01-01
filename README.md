<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Phos Control - Kidney Health Guidance

This project provides kidney health guidance, primarily focused on phosphate control. It is built with React, Vite, and tailors AI responses for renal health advice.

View your app in AI Studio: [https://ai.studio/apps/drive/1kYDUMR0KqSZkESAiFJ9DWiR6HUHjvAVa](https://ai.studio/apps/drive/1kYDUMR0KqSZkESAiFJ9DWiR6HUHjvAVa)

## Features
- **React 19 + Vite**: Fast and modern frontend development.
- **GitHub Actions**: Automated deployment to GitHub Pages.
- **AI Integration**: Helper for kidney-friendly diet choices (requires API Key).

## Run Locally

**Prerequisites:**  Node.js (v18+)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment:**
   Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key (see `.env.example` if available).

3. **Run the app:**
   ```bash
   npm run dev
   ```

## Deployment

This project is configured to automatically deploy to **GitHub Pages** whenever you push to the `main` branch.

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update project"
   git push origin main
   ```

2. **Check Actions**:
   Go to your repository's "Actions" tab to see the "Deploy" workflow running.

3. **View Site**:
   Once completed, your site will be live at `https://<your-username>.github.io/<repo-name>/`.
