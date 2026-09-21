import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MeridianTexture } from '@/components/ui/PageHero';
import { companies } from '@/data/companies';
import { useSeo } from '@/lib/useSeo';

export default function NotFound() {
  useSeo({ title: 'Page not found' });

  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <MeridianTexture />
      <Container size="narrow" className="relative text-center">
        <p className="font-display text-6xl font-semibold text-brass-400 sm:text-7xl">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-base leading-relaxed text-ink-300">
          That page is not on the group site. It may live on one of our companies’ own sites.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/">Back to home</Button>
          <Button to="/companies" variant="outline">
            Our companies
          </Button>
        </div>

        <ul className="mx-auto mt-12 grid max-w-lg gap-2 text-left">
          {companies.map((company) => (
            <li key={company.slug}>
              <a
                href={company.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-lg border border-white/10 px-4 py-3 text-sm transition hover:border-brass-500/40 hover:bg-white/5"
              >
                <span className="text-ink-100">{company.name}</span>
                <span className="shrink-0 text-xs text-ink-500">{company.websiteLabel}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
