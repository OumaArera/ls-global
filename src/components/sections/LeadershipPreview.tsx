import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { PersonCard } from './PersonCard';
import { management } from '@/data/leadership';

export function LeadershipPreview() {
  return (
    <section className="bg-navy-50/60 py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="Executive leadership"
          title="Leadership Across the Group"
          body="Our executive team manages strategy, operations, finance, and business growth across the group. The board provides governance, oversight, and public-sector and international expertise across the United States, Senegal, and The Gambia."
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
