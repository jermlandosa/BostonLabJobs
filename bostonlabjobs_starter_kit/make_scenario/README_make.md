
# Make.com Scenario – BostonLabJobs

## Modules (in order)

1. **Apify > Get dataset items** (poll latest run of `blj-greenhouse-scraper`)
2. **Array aggregator** → map to Airtable fields
3. **Airtable > Create/Update** (upsert into `Jobs` using `hash` as unique key)
4. **Airtable > Find/Update** (weekly: mark jobs `Closed` if `scraped_at` > 30 days)
5. **Email (SendGrid/Gmail)** (optional instant alerts for Pro users)

## Scheduling

* Main: Daily 7:00 AM ET
* Close-old: Weekly Mon 6:00 AM ET
