import Apify from 'apify';
import { CheerioCrawler, createCheerioRouter } from 'crawlee';

// Configure your targets here (add more boards as needed)
const targets = [
  { company: 'Biogen', url: 'https://boards.greenhouse.io/biogen' },
  { company: 'Ginkgo Bioworks', url: 'https://boards.greenhouse.io/ginkgobioworks' },
  { company: 'Sarepta', url: 'https://boards.greenhouse.io/sareptatherapeutics' }
];

const router = createCheerioRouter();

router.addDefaultHandler(async ({ $, request, pushData }) => {
  const company = request.userData.company;
  const today = new Date().toISOString().split('T')[0];

  $('a[href*="/jobs/"]').each(async (_, a) => {
    const $a = $(a);
    const title = $a.text().trim();
    const href = $a.attr('href');
    if (!title || !href) return;

    const url = href.startsWith('http') ? href : new URL(href, request.loadedUrl || request.url).href;

    const container = $a.closest('.opening, .job, li, tr, div');
    const location = container.find('.location').first().text().trim() || 'Boston, MA';

    await pushData({
      job_id: `${company}-${title}-${location}-${today}`.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,''),
      company,
      title,
      location,
      onsite_remote: 'On-site',
      seniority: '',
      department: '',
      source: 'Greenhouse',
      url,
      salary_min: '',
      salary_max: '',
      posted_date: today,
      scraped_at: new Date().toISOString(),
      status: 'Open',
      featured_until: '',
      hash: `${company}|${title}|${location}|${url}`,
      is_published: true,
      notes: ''
    });
  });
});

Apify.main(async () => {
  const startRequests = targets.map(t => ({ url: t.url, userData: { company: t.company } }));
  const crawler = new CheerioCrawler({ requestHandler: router, maxRequestsPerCrawl: 200 });
  await crawler.run(startRequests);
});
