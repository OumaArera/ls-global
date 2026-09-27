import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { CompanyCard } from './CompanyCard';
import { companies } from '@/data/companies';

export function CompaniesSection({
  eyebrow = 'Our companies',
  title = 'One Global Group. Essential Services.',
  body = 'Each LS Global Holdings company operates independently, with its own services, website, and customer contacts. Choose a company below to explore its services and connect directly with the team.',
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <SectionHeading eyebrow={eyebrow} title={title} body={body} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, index) => (
            <Reveal key={company.slug} delay={index * 70} className="flex h-full">
              <CompanyCard company={company} className="w-full" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
