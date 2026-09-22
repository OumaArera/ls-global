import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MeridianTexture } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { footprint } from '@/data/group';
import { companyBySlug } from '@/data/companies';

/** Where the group actually operates, country by country. */
export function FootprintSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20 lg:py-24">
      <MeridianTexture />

      <Container size="wide" className="relative">
        <SectionHeading
          tone="light"
          eyebrow="Where we operate"
          title="Two continents, three countries"
          body="Operations in both the U.S. and West Africa — close enough to each market to run it properly, joined by shared systems and one board."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {footprint.map((region, index) => (
            <Reveal key={region.country} delay={index * 90} className="h-full">
              <article className="group h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-leaf-500/40 hover:bg-white/[0.06]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={region.image}
                    alt={region.imageAlt}
                    loading="lazy"
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/25 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-5 bottom-4">
                    <h3 className="text-xl font-semibold text-white">{region.country}</h3>
                    <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-leaf-300">
                      {region.city}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-[15px] leading-relaxed text-navy-300">{region.body}</p>

                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                    {region.companySlugs.map((slug) => {
                      const company = companyBySlug(slug);
                      if (!company) return null;

                      return (
                        <li key={slug} className="flex items-center justify-between gap-3">
                          <Link
                            to={`/companies/${company.slug}`}
                            className="truncate text-sm text-navy-200 transition hover:text-white"
                          >
                            {company.shortName}
                          </Link>
                          <a
                            href={company.website}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex shrink-0 items-center gap-1 text-[11px] text-navy-500 transition hover:text-leaf-400"
                          >
                            {company.websiteLabel}
                            <ArrowUpRight className="size-3" aria-hidden="true" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
