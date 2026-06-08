# Wedora

Wedora project setup with automated Gemini CLI reviews.

## GitHub Actions - Gemini CLI Assistant

This repository is configured with Gemini CLI to perform automated code reviews on pull requests and respond to issue comments.

### Setup

To enable the Gemini CLI workflow, you must add your Gemini API Key as a repository secret:

1. Go to your repository settings: **Settings > Secrets and variables > Actions**.
2. Click **New repository secret**.
3. Name: `GEMINI_API_KEY`
4. Value: `AIzaSyDFtycbSup0jAqpIqEa0FluXJbMu1bEyLs` (or your preferred key)
5. Save the secret.

### Usage

- **Pull Request Review**: Any new pull request or update will automatically trigger a review by Gemini.
- **Interactive Assistance**: Mention `@gemini-cli` in any issue or pull request comment followed by your request (e.g. `@gemini-cli explain this code change`).
