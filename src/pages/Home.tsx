import { Hero } from '@/components/home/Hero';
import { StatStrip } from '@/components/home/StatStrip';
import { AboutPanel } from '@/components/sections/AboutPanel';
import { SectorsSection } from '@/components/sections/SectorsSection';
import { CompaniesSection } from '@/components/sections/CompaniesSection';
import { FootprintSection } from '@/components/sections/FootprintSection';
import { CoreValues } from '@/components/sections/CoreValues';
import { LeadershipPreview } from '@/components/sections/LeadershipPreview';
import { FutureBand } from '@/components/sections/FutureBand';
import { CtaBand } from '@/components/sections/CtaBand';
import { site } from '@/data/site';
import { useSeo } from '@/lib/useSeo';

export default function Home() {
  useSeo({
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    suffix: false,
  });

  return (
    <>
      <Hero />
      <StatStrip />
      <AboutPanel />
      <SectorsSection />
      <CompaniesSection />
      <FootprintSection />
      <CoreValues tone="tinted" />
      <LeadershipPreview />
      <FutureBand />
      <CtaBand />
    </>
  );
}
