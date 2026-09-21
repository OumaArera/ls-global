import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowUpRight, Check, Globe, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { CompanyCard } from '@/components/sections/CompanyCard';
import { CtaBand } from '@/components/sections/CtaBand';
import { companies, companyBySlug, sectorBySlug } from '@/data/companies';
import { useSeo } from '@/lib/useSeo';

export default function CompanyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const company = slug ? companyBySlug(slug) : undefined;

  useSeo({
    title: company ? company.name : 'Company',
    description: company?.summary,
  });

  if (!company) return <Navigate to="/companies" replace />;

  const sector = sectorBySlug(company.sector);
  const others = companies.filter((item) => item.slug !== company.slug);

  return (
    <>
      <PageHero
        eyebrow={sector.name}
        title={company.name}
        body={company.tagline}
        crumbs={[{ label: 'Our Companies', href: '/companies' }, { label: company.shortName }]}
        image={company.image}
      />

      <section
        style={{ ['--accent' as string]: sector.accent }}
        className="py-14 sm:py-16 lg:py-20"
      >
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="mb-7 h-14 w-auto object-contain object-left"
                />

                <div className="prose-body space-y-4">
                  {company.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>

                <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf-600">
                  What they do
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {company.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 rounded-lg border border-navy-100 bg-white p-4 shadow-card"
                    >
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-[15px] leading-snug text-navy-800">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* The whole point of the page: send them to the real site. */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="sticky top-32 overflow-hidden rounded-xl border border-navy-100 bg-white shadow-lift">
                  <div className="bg-navy-950 px-6 py-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf-400">
                      Official website
                    </p>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 flex items-center gap-2 font-display text-xl font-semibold text-white transition hover:text-leaf-300"
                    >
                      {company.websiteLabel}
                      <ArrowUpRight className="size-5" aria-hidden="true" />
                    </a>
                  </div>

                  <div className="p-6">
                    <p className="text-[15px] leading-relaxed text-navy-600">
                      Services, pricing, availability and enquiries are all handled on{' '}
                      {company.shortName}’s own site — not here.
                    </p>

                    <Button
                      href={company.website}
                      target="_blank"
                      rel="noreferrer"
                      size="lg"
                      className="mt-5 w-full"
                    >
                      Go to {company.shortName}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Button>

                    <dl className="mt-6 space-y-4 border-t border-navy-100 pt-6 text-sm">
                      <div className="flex items-start gap-3">
                        <sector.icon
                          className="mt-0.5 size-4 shrink-0 text-[var(--accent)]"
                          aria-hidden="true"
                        />
                        <div>
                          <dt className="text-xs uppercase tracking-[0.12em] text-navy-500">
                            Sector
                          </dt>
                          <dd className="mt-0.5 font-medium text-navy-900">{sector.name}</dd>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin
                          className="mt-0.5 size-4 shrink-0 text-[var(--accent)]"
                          aria-hidden="true"
                        />
                        <div>
                          <dt className="text-xs uppercase tracking-[0.12em] text-navy-500">
                            Based in
                          </dt>
                          <dd className="mt-0.5 font-medium text-navy-900">{company.location}</dd>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe
                          className="mt-0.5 size-4 shrink-0 text-[var(--accent)]"
                          aria-hidden="true"
                        />
                        <div>
                          <dt className="text-xs uppercase tracking-[0.12em] text-navy-500">
                            Part of
                          </dt>
                          <dd className="mt-0.5 font-medium text-navy-900">
                            <Link to="/about" className="transition hover:text-leaf-700">
                              LS Global Holdings
                            </Link>
                          </dd>
                        </div>
                      </div>
                    </dl>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50/60 py-14 sm:py-16">
        <Container size="wide">
          <h2 className="text-2xl font-semibold sm:text-3xl">Elsewhere in the group</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index * 60} className="flex h-full">
                <CompanyCard company={other} className="w-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
