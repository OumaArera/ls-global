import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { partnerMailto } from '@/data/site';

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
};

export function CtaBand({
  eyebrow = 'Work with the group',
  title = 'Looking for one of our companies — or for the group itself?',
  body = 'For care, fire safety, EV and energy or transport, go straight to that company’s own site. For partnerships, investment or group-level enquiries, start here.',
}: CtaBandProps) {
  return (
    <section className="border-y border-leaf-200/60 bg-leaf-50">
      <Container size="wide">
        <div className="flex flex-col items-start gap-8 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-2 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf-700">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              {eyebrow}
            </div>
            <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">{title}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-navy-700">{body}</p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <Button to="/companies" size="lg" variant="secondary">
              Our companies
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href={partnerMailto} size="lg">
              Contact the group
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
