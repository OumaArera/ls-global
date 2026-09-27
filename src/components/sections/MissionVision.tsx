import { Compass, Telescope } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MeridianTexture } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { mission, vision } from '@/data/group';

const statements = [
  {
    label: 'Mission',
    body: mission,
    icon: Compass,
  },
  {
    label: 'Vision',
    body: vision,
    icon: Telescope,
  },
];

/**
 * Mission and vision get a band of their own rather than a line each in the
 * About panel: they are the two statements the client most wants read, so they
 * are set large, in the display face, on the group's own navy.
 */
export function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20 lg:py-24">
      <MeridianTexture />
      <div
        className="absolute -left-32 top-1/2 hidden size-[460px] -translate-y-1/2 rounded-full bg-leaf-500/10 blur-3xl lg:block"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <SectionHeading
          tone="light"
          eyebrow="What drives us"
          title="Our mission and vision"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {statements.map((statement, index) => (
            <Reveal key={statement.label} delay={index * 100} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] p-7 transition duration-300 hover:border-leaf-400/50 hover:bg-white/[0.07] sm:p-9">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-leaf-500 to-leaf-300"
                />

                <div className="flex items-center gap-4">
                  <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-xl bg-leaf-500/15 text-leaf-300 ring-1 ring-inset ring-leaf-400/30">
                    <statement.icon className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {statement.label}
                  </h3>
                </div>

                <p className="mt-6 font-display text-lg leading-relaxed text-navy-50 sm:text-xl sm:leading-relaxed">
                  {statement.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
