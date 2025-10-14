# BostonLabJobs — GitHub Pages Site
Static site for GitHub Pages. Embed your Airtable (or Softr) jobs view via iframe in `jobs.html`.

## Deploy
1) Add these files to the repo root.
2) In GitHub: Settings → Pages → Source = **GitHub Actions**. This allows the `deploy static site to GitHub Pages` workflow to publish the site.
3) Run (or wait for) the `Deploy static site to GitHub Pages` GitHub Actions workflow on `main`.
4) Site publishes to `https://<your-username>.github.io/BostonLabJobs/` (or repo name).

## Embed jobs
- In Airtable: Share view → "Embed this view" → copy the iframe URL.
- Replace the placeholder in `jobs.html`.
