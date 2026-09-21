import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { stats } from '@/data/group';

export function StatStrip() {
  return (
    <section className="border-b border-navy-100 bg-navy-50/60">
      <Container size="wide">
        <dl className="grid grid-cols-2 divide-navy-200/70 py-10 sm:divide-x lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 70}
              className="px-2 py-4 text-center sm:px-6"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-semibold text-leaf-600 sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-navy-800">
                  {stat.label}
                </span>
                <span className="mt-1 block text-[13px] text-navy-500">{stat.detail}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
