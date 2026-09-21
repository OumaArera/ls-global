import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { values } from '@/data/group';

export function CoreValues({ tone = 'light' }: { tone?: 'light' | 'tinted' }) {
  return (
    <section className={tone === 'tinted' ? 'bg-navy-50/60 py-16 sm:py-20' : 'py-16 sm:py-20'}>
      <Container size="wide">
        <SectionHeading
          eyebrow="Core values"
          title="What every company in the group is held to"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.name} delay={index * 70} className="h-full">
              <div className="h-full rounded-xl border border-navy-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-leaf-50 text-leaf-600">
                  <value.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">{value.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-600">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
