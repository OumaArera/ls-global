import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { PersonCard } from '@/components/sections/PersonCard';
import { CtaBand } from '@/components/sections/CtaBand';
import { initials, people, personBySlug } from '@/data/leadership';
import { useSeo } from '@/lib/useSeo';

export default function PersonDetail() {
  const { slug } = useParams<{ slug: string }>();
  const person = slug ? personBySlug(slug) : undefined;

  useSeo({
    title: person ? `${person.name} — ${person.boardRole}` : 'Leadership',
    description: person?.lead,
  });

  if (!person) return <Navigate to="/leadership" replace />;

  const others = people.filter((item) => item.slug !== person.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={person.boardRole}
        title={person.name}
        body={person.lead}
        crumbs={[{ label: 'Leadership', href: '/leadership' }, { label: person.name }]}
        image="/images/boardroom.jpg"
      />

      <section className="py-14 sm:py-16 lg:py-20">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="sticky top-32">
                  <div className="overflow-hidden rounded-xl border border-navy-100 shadow-lift">
                    {person.photo ? (
                      <img
                        src={person.photo}
                        alt={`${person.name}, ${person.boardRole}`}
                        className="aspect-[4/5] w-full object-cover object-top"
                      />
                    ) : (
                      <div
                        className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950"
                        aria-hidden="true"
                      >
                        <span className="font-display text-7xl font-semibold text-leaf-400/80">
                          {initials(person.name)}
                        </span>
                      </div>
                    )}
                  </div>

                  <dl className="mt-6 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Briefcase className="mt-0.5 size-4 shrink-0 text-leaf-600" aria-hidden="true" />
                      <div>
                        <dt className="text-xs uppercase tracking-[0.12em] text-navy-500">Role</dt>
                        <dd className="mt-0.5 font-medium text-navy-900">{person.boardRole}</dd>
                        {person.managementRole &&
                          person.managementRole !== person.boardRole && (
                            <dd className="mt-0.5 text-navy-600">{person.managementRole}</dd>
                          )}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-leaf-600" aria-hidden="true" />
                      <div>
                        <dt className="text-xs uppercase tracking-[0.12em] text-navy-500">Based</dt>
                        <dd className="mt-0.5 font-medium text-navy-900">{person.based}</dd>
                      </div>
                    </div>
                  </dl>

                  {person.alsoServes && (
                    <div className="mt-6 rounded-lg border border-navy-100 bg-navy-50/70 p-5">
                      <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-500">
                        Also serves as
                      </h2>
                      <ul className="mt-3 space-y-2">
                        {person.alsoServes.map((role) => (
                          <li key={role} className="text-[14px] leading-snug text-navy-700">
                            {role}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    to="/leadership"
                    className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-navy-600 transition hover:text-leaf-700"
                  >
                    <ArrowLeft className="size-4" aria-hidden="true" />
                    All leadership
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={90}>
                <div className="prose-body space-y-5">
                  {person.bio.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50/60 py-14 sm:py-16">
        <Container size="wide">
          <h2 className="text-2xl font-semibold sm:text-3xl">Others on the board</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index * 60} className="flex h-full">
                <PersonCard person={other} className="w-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
