import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from '@/components/sections/ContactForm';
import { companies, sectorBySlug } from '@/data/companies';
import { contact, phones, site } from '@/data/site';
import { useSeo } from '@/lib/useSeo';

export default function Contact() {
  useSeo({
    title: 'Contact',
    description:
      'Contact LS Global Holdings for group-level, partnership and investment enquiries — or go straight to one of the five operating companies.',
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the group"
        body="For anything to do with a specific service, the operating company will answer faster. For partnerships, investment and group-level matters, this is the right door."
        crumbs={[{ label: 'Contact' }]}
        image="/images/boardroom.jpg"
      />

      {/* Routing first: most visitors want a company, not the holding company. */}
      <section className="border-b border-ink-100 bg-ink-50/60 py-14 sm:py-16">
        <Container size="wide">
          <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-600">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            Looking for one of our companies?
          </div>
          <h2 className="max-w-2xl text-2xl font-semibold sm:text-3xl">
            Each company handles its own enquiries
          </h2>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company, index) => {
              const sector = sectorBySlug(company.sector);

              return (
                <Reveal key={company.slug} delay={index * 60}>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noreferrer"
                    style={{ ['--accent' as string]: sector.accent }}
                    className="group flex h-full items-center gap-4 rounded-xl border border-ink-100 bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-lift"
                  >
                    <img
                      src={company.logo}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="size-12 shrink-0 rounded-md object-contain"
                      width={48}
                      height={48}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[15px] font-semibold text-ink-900">
                        {company.shortName}
                      </span>
                      <span className="block truncate text-[13px] text-ink-500">
                        {company.location}
                      </span>
                      <span className="mt-0.5 flex items-center gap-1 text-xs font-medium text-[var(--accent)]">
                        {company.websiteLabel}
                        <ArrowUpRight
                          className="size-3 transition group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-600">
                  <span className="h-px w-8 bg-current" aria-hidden="true" />
                  Group office
                </div>
                <h2 className="text-2xl font-semibold sm:text-3xl">{site.name}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
                  {site.description}
                </p>

                <dl className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brass-50 text-brass-600">
                      <Mail className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                        Email
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-[15px] font-medium text-ink-900 transition hover:text-brass-700"
                        >
                          {contact.email}
                        </a>
                      </dd>
                    </div>
                  </div>

                  {phones.length > 0 && (
                    <div className="flex items-start gap-4">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brass-50 text-brass-600">
                        <Phone className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                          Telephone
                        </dt>
                        <dd className="mt-1 space-y-1">
                          {phones.map((phone) => (
                            <a
                              key={phone.href}
                              href={phone.href}
                              className="block text-[15px] font-medium text-ink-900 transition hover:text-brass-700"
                            >
                              {phone.display}
                              <span className="ml-2 text-xs font-normal text-ink-500">
                                {phone.label}
                              </span>
                            </a>
                          ))}
                        </dd>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brass-50 text-brass-600">
                      <MapPin className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                        Where we operate
                      </dt>
                      <dd className="mt-1 space-y-1.5">
                        {contact.regions.map((region) => (
                          <p key={region.label} className="text-[15px] leading-snug">
                            <span className="font-medium text-ink-900">{region.label}</span>
                            <span className="block text-[13px] text-ink-500">{region.detail}</span>
                          </p>
                        ))}
                      </dd>
                    </div>
                  </div>
                </dl>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="rounded-xl border border-ink-100 bg-white p-6 shadow-lift sm:p-8">
                  <h2 className="text-xl font-semibold sm:text-2xl">Send us a message</h2>
                  <p className="mt-2 text-[15px] text-ink-600">
                    Tell us which company or sector your enquiry concerns and we will route it to
                    the right team.
                  </p>
                  <div className="mt-7">
                    <ContactForm />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
