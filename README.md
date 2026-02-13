# Precilla - Professional Freelance Blog

This project is a professional portfolio website for Precilla, built with Vite and vanilla JavaScript/CSS.

## Project Structure

- `index.html`: Main landing page with content.
- `style.css`: Styling for the website.
- `vite.config.js`: Configuration for Vite and GitHub Pages deployment.
- `.github/workflows/deploy.yml`: GitHub Actions workflow for automatic deployment.

## Deployment Instructions

Since this project is configured to deploy via GitHub Actions, follow these steps:

1.  **Push to GitHub**:
    Ensure all files in this directory are committed and pushed to your GitHub repository.

    ```bash
    git add .
    git commit -m "Initial commit of Precilla blog"
    git push origin main
    ```

2.  **Configure GitHub Pages**:
    - Go to your repository on GitHub.
    - Navigate to **Settings** > **Pages**.
    - Under **Build and deployment**, set the **Source** to **GitHub Actions**.

3.  **Verify Deployment**:
    - Go to the **Actions** tab in your repository.
    - You should see the "Deploy static content to Pages" workflow running.
    - Once completed, click on the workflow run to see the deployment URL.

## Local Development (Requires Node.js)

If you install Node.js later, you can run:

```bash
npm install
npm run dev
```
