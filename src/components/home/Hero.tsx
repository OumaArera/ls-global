import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MeridianTexture } from '@/components/ui/PageHero';
import { companies } from '@/data/companies';
import { site } from '@/data/site';
import { mission } from '@/data/group';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
      <img
        src="/images/hero-group.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/92 to-navy-900/70"
        aria-hidden="true"
      />
      <MeridianTexture />
      <div
        className="absolute -right-32 top-1/3 hidden size-[520px] rounded-full bg-leaf-500/10 blur-3xl lg:block"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-leaf-500/30 bg-leaf-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-leaf-300">
              United States · Senegal · The Gambia
            </p>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem]">
              One Group.
              <br />
              Many Solutions.
              <br />
              <span className="text-leaf-400">Real Impact.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
              {mission}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button to="/companies" size="lg">
                Explore our companies
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button to="/about" size="lg" variant="outline">
                About the group
              </Button>
            </div>
          </div>

          {/* The five destinations, present above the fold */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf-400">
                Five companies, five sites
              </h2>
              <ul className="mt-4 space-y-1">
                {companies.map((company) => (
                  <li key={company.slug}>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-white/[0.06]"
                    >
                      <img
                        src={company.logo}
                        alt=""
                        aria-hidden="true"
                        className="h-9 w-20 shrink-0 rounded-md bg-white/95 object-contain px-1.5 py-1"
                        width={80}
                        height={36}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-white">
                          {company.shortName}
                        </span>
                        <span className="block truncate text-xs text-navy-400">
                          {company.websiteLabel}
                        </span>
                      </span>
                      <ArrowRight
                        className="size-4 shrink-0 text-navy-500 transition group-hover:translate-x-0.5 group-hover:text-leaf-400"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-white/10 pt-4 text-xs text-navy-400">
                {site.shortName} is the parent. Each company trades under its own brand and
                serves its own customers.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
