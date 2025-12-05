---
description: How to deploy the E-commerce Application
---

# Deploying the E-commerce Application

Since this application uses a React frontend and a `json-server` backend, you need to deploy them separately or use a service that supports both.

## Option 1: Deploying for Demo (Local Production Build)

To run the production version locally:

1. Build the React application:
   ```bash
   npm run build
   ```

2. Serve the build:
   ```bash
   npx serve -s build
   ```

3. In a separate terminal, keep the backend running:
   ```bash
   npm run server
   ```

## Option 2: Deploying to the Web (Vercel + Glitch/Render)

### 1. Deploy Backend (json-server)
You cannot deploy `json-server` to Vercel/Netlify directly as they are for static sites/serverless functions.
- Move `db.json` to a new repo or use a service like **My JSON Server** or deploy `json-server` to **Render/Glitch**.
- Update the API URL in your React code (replace `http://localhost:3003` with your live backend URL).

### 2. Deploy Frontend (React)
1. Push your code to GitHub.
2. Import the project into **Vercel** or **Netlify**.
3. Set the build command to `npm run build`.
4. Set the output directory to `build`.

## Quick Fix for Vercel (Mock Data)
If you want to deploy just the frontend to Vercel without a real backend, you can switch to using local mock data instead of `axios` calls to localhost.
