import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { PersonCard } from './PersonCard';
import { management } from '@/data/leadership';

export function LeadershipPreview() {
  return (
    <section className="bg-ink-50/60 py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="Executive leadership"
          title="The people running the group"
          body="Four executives lead the group day to day, supported by a board that adds governance, public-sector and diplomatic experience across all three countries."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {management.map((person, index) => (
            <Reveal key={person.slug} delay={index * 70} className="flex h-full">
              <PersonCard person={person} className="w-full" />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/leadership" variant="ghost">
            Board of Directors and Management
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
