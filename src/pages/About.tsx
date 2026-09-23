import { PageHero } from '@/components/ui/PageHero';
import { AboutPanel } from '@/components/sections/AboutPanel';
import { MissionVision } from '@/components/sections/MissionVision';
import { AdvantageSection } from '@/components/sections/AdvantageSection';
import { CoreValues } from '@/components/sections/CoreValues';
import { FootprintSection } from '@/components/sections/FootprintSection';
import { SectorsSection } from '@/components/sections/SectorsSection';
import { FutureBand } from '@/components/sections/FutureBand';
import { CtaBand } from '@/components/sections/CtaBand';
import { useSeo } from '@/lib/useSeo';

export default function About() {
  useSeo({
    title: 'About the group',
    description:
      'LS Global Holdings is a multi-sector group operating across the United States, Senegal and The Gambia in care, energy, fire safety and transport.',
  });

  return (
    <>
      <PageHero
        eyebrow="About"
        title="One group. Many solutions. Real impact."
        body="A multinational enterprise operating across the United States, Senegal and The Gambia, in four sectors people depend on."
        crumbs={[{ label: 'About' }]}
        image="/images/boardroom.jpg"
      />
      <AboutPanel withCta={false} />
      <MissionVision />
      <CoreValues tone="tinted" />
      <AdvantageSection />
      <SectorsSection />
      <FootprintSection />
      <FutureBand />
      <CtaBand />
    </>
  );
}
