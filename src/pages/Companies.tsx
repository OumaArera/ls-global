import { PageHero } from '@/components/ui/PageHero';
import { CompaniesSection } from '@/components/sections/CompaniesSection';
import { SectorsSection } from '@/components/sections/SectorsSection';
import { FootprintSection } from '@/components/sections/FootprintSection';
import { CtaBand } from '@/components/sections/CtaBand';
import { useSeo } from '@/lib/useSeo';

export default function Companies() {
  useSeo({
    title: 'Our companies',
    description:
      'The five operating companies of LS Global Holdings: 1st Edmonds AFH, Bothell Serenity Corp, Continental EV & Energy Center, Sound Fire & Safety LLC and LS Transport.',
  });

  return (
    <>
      <PageHero
        eyebrow="Our companies"
        title="Five companies. Five websites."
        body="Every company in the group runs its own site, with its own services and its own contacts. This page is the doorway to all of them."
        crumbs={[{ label: 'Our Companies' }]}
        image="/images/hero-group.webp"
      />
      <CompaniesSection
        eyebrow="The portfolio"
        title="Go straight to the company you need"
        body="Each card links out to that company's own website. The overview link stays here, on the group site."
      />
      <SectorsSection />
      <FootprintSection />
      <CtaBand />
    </>
  );
}
