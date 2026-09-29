import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { PersonCard } from '@/components/sections/PersonCard';
import { CtaBand } from '@/components/sections/CtaBand';
import { board, management } from '@/data/leadership';
import { useSeo } from '@/lib/useSeo';

export default function Leadership() {
  useSeo({
    title: 'Leadership',
    description:
      'The Board of Directors and Management of LS Global Holdings — executive leadership across the United States, Senegal and The Gambia, with non-executive governance and diplomatic experience.',
  });

  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Proven Experience. Strategic Leadership."
        body="Our board combines hands-on operating experience with expertise in public-sector governance, national security, law, finance, and diplomacy—providing practical insight and strategic oversight across the United States, Senegal, and The Gambia."
        crumbs={[{ label: 'Leadership' }]}
        image="/images/boardroom.jpg"
      />

      <section className="py-16 sm:py-20">
        <Container size="wide">
          <SectionHeading
            eyebrow="Board of Directors"
            title="Governance of the group"
            body="Four executive directors and three non-executive directors."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {board.map((person, index) => (
              <Reveal key={person.slug} delay={index * 60} className="flex h-full">
                <PersonCard person={person} className="w-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50/60 py-16 sm:py-20">
        <Container size="wide">
          <SectionHeading
            eyebrow="Management"
            title="Executive Leadership in Action"
            body="The four executive directors lead LS Global Holdings' day-to-day management, with direct responsibility for strategy, operations, business development, and financial oversight across the group."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {management.map((person, index) => (
              <Reveal key={person.slug} delay={index * 60}>
                <article className="h-full rounded-xl border border-navy-100 bg-white p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-navy-900">{person.name}</h3>
                  <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.08em] text-leaf-600">
                    {person.managementRole}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-600">{person.lead}</p>
                  {person.alsoServes && (
                    <ul className="mt-4 space-y-1.5 border-t border-navy-100 pt-4">
                      {person.alsoServes.map((role) => (
                        <li key={role} className="text-[13px] leading-snug text-navy-500">
                          {role}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Governance"
        title="Questions for the board?"
        body="Group-level governance, partnership and investment enquiries are handled centrally."
      />
    </>
  );
}
