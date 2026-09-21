import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { companiesInSector, sectors } from '@/data/companies';

/** The document's four business sectors, each opening onto its companies. */
export function SectorsSection() {
  return (
    <section className="bg-navy-50/60 py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="Our business sectors"
          title="Four sectors, all of them essential"
          body="Care, energy, safety and transport — services people depend on, run as separate companies under one governance structure."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {sectors.map((sector, index) => {
            const members = companiesInSector(sector.slug);

            return (
              <Reveal
                key={sector.slug}
                delay={index * 80}
                className="h-full"
              >
                <article
                  style={{ ['--accent' as string]: sector.accent }}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card transition duration-300 hover:shadow-lift"
                >
                  <div className="relative aspect-[21/9] shrink-0 overflow-hidden bg-navy-100">
                    <img
                      src={sector.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="size-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-navy-950/20"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-5 bottom-4 flex items-center gap-3">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)] text-white">
                        <sector.icon className="size-5" aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-semibold text-white">{sector.name}</h3>
                    </div>
                  </div>

                  <div className="flex min-h-0 flex-1 flex-col p-6">
                    <p className="flex-1 text-[15px] leading-relaxed text-navy-600">
                      {sector.summary}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-navy-100 pt-5">
                      {members.map((company) => (
                        <li key={company.slug}>
                          <Link
                            to={`/companies/${company.slug}`}
                            className="flex items-center gap-2 text-sm font-medium text-navy-800 transition hover:text-[var(--accent)]"
                          >
                            <span
                              className="size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                              aria-hidden="true"
                            />
                            {company.name}
                            <ArrowRight
                              className="size-3.5 shrink-0 opacity-0 transition group-hover:opacity-60"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
