import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { about } from '@/data/group';

/** Who the group is. Mission and vision have their own band — see MissionVision. */
export function AboutPanel({ withCta = true }: { withCta?: boolean }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-xl shadow-lift">
              <img
                src={about.image}
                alt={about.imageAlt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-3 hidden rounded-lg bg-navy-900 px-6 py-5 shadow-lift sm:block"
              aria-hidden="true"
            >
              <span className="block font-display text-3xl font-semibold text-leaf-400">3</span>
              <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-300">
                Countries
              </span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf-600">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              {about.eyebrow}
            </div>
            <h2 className="text-3xl font-semibold leading-[1.15] sm:text-4xl">{about.heading}</h2>

            <div className="prose-body mt-5 space-y-4">
              {about.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>


            {withCta && (
              <div className="mt-8">
                <Button to="/about" variant="ghost">
                  More about the group
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
