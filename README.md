# BostonLabJobs — GitHub Pages Site

Static site for GitHub Pages. Embed your Airtable (or Softr) jobs view via iframe in `jobs.html`.

## Deploy
1. Commit these files to the `main` branch.
2. In GitHub → **Settings** → **Pages**, set **Build and deployment** → **Source** = “Deploy from a branch”, then choose `main` and the `/ (root)` folder.
3. Save the settings and wait ~60 seconds for GitHub Pages to publish the site.
4. Access the site at `https://<your-username>.github.io/BostonLabJobs/`.

The `.nojekyll` flag is already included so GitHub Pages serves the static files as-is.

## Embed jobs
- In Airtable: Share view → "Embed this view" → copy the iframe URL.
- Replace the placeholder in `jobs.html`.
