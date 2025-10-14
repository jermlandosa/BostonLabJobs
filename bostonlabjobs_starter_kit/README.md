
# BostonLabJobs – Starter Kit

Everything you need to launch a semi-automated Boston biotech/lab job dashboard.

## Contents

* `airtable/blj_jobs_seed.csv` – Import into Airtable as your Jobs table (schema reference).
* `apify_actor_greenhouse/` – Crawlee actor to scrape Greenhouse boards.
* `make_scenario/README_make.md` – Make.com automation outline.
* `site_copy/` – Copy blocks for Softr pages (home, legal).
* `outreach/templates.md` – Launch post, DMs, and email templates.

## Launch Steps

1. Create Airtable base **BLJ – Jobs** and import the CSV.
2. Deploy the Apify actor (or run locally) and schedule daily.
3. Use Make.com to upsert dataset items into Airtable.
4. Connect Airtable to Softr, add filters, gate Pro features with Stripe.
5. Post the launch on LinkedIn and sell featured listings.
