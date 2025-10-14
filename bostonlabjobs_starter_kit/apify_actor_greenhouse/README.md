# BLJ Greenhouse Scraper (Apify/Crawlee)

Scrapes Greenhouse job titles + links and outputs a dataset compatible with Airtable upserts.

## Run locally
```bash
npm i
node main.js
```

On the Apify platform, create an actor with these files, schedule daily, and send results to Airtable (via webhook/Make.com).

## Add companies

Edit `targets` in `main.js` with `{ company, url }` for more Greenhouse boards.
