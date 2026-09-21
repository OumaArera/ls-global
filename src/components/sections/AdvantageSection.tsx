import { Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { advantages } from '@/data/group';

export function AdvantageSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-600">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              Our strategic advantage
            </div>
            <h2 className="text-3xl font-semibold leading-[1.15] sm:text-4xl">
              Why the group holds together
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              Five companies in four sectors across three countries only works if something
              connects them. These are the five things that do.
            </p>

            <ul className="mt-8 space-y-3">
              {advantages.map((advantage, index) => (
                <Reveal as="li" key={advantage.title} delay={index * 60}>
                  <div className="flex items-start gap-4 rounded-lg border border-ink-100 bg-white p-4 shadow-card transition hover:border-brass-200">
                    <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-ink-900 text-brass-400">
                      <advantage.icon className="size-4.5" aria-hidden="true" />
                    </span>
                    <span className="flex-1 pt-1.5 text-[15px] font-medium leading-snug text-ink-800">
                      {advantage.title}
                    </span>
                    <Check className="mt-2 size-4 shrink-0 text-brass-500" aria-hidden="true" />
                  </div>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:order-first">
            <div className="overflow-hidden rounded-xl shadow-lift">
              <img
                src="/images/strategy.jpg"
                alt="A business presentation to colleagues around a table"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
