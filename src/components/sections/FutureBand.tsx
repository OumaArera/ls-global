import { Container } from '@/components/ui/Container';
import { MeridianTexture } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { future } from '@/data/group';

export function FutureBand() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <MeridianTexture />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf-400">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              {future.heading}
            </div>
            <h2 className="text-3xl font-semibold leading-[1.15] text-white sm:text-4xl">
              A legacy of impact across generations
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-200 sm:text-lg">{future.body}</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <img
                src={future.image}
                alt={future.imageAlt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
