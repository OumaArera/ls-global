import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { sectorBySlug, type Company } from '@/data/companies';
import { cn } from '@/lib/cn';

type CompanyCardProps = {
  company: Company;
  className?: string;
};

/**
 * The hub's working part. Two destinations, deliberately distinguished:
 * the card body goes to this site's page about the company, and the
 * outbound button — always the visually louder of the two — goes to the
 * company's own website, which is where a visitor with actual business
 * needs to end up.
 */
export function CompanyCard({ company, className }: CompanyCardProps) {
  const sector = sectorBySlug(company.sector);

  return (
    <article
      style={{ ['--accent' as string]: sector.accent }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-1 bg-[var(--accent)]"
      />

      <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-navy-100">
        <img
          src={company.image}
          alt={company.imageAlt}
          loading="lazy"
          className="size-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
          <span className="inline-flex min-w-0 items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-navy-800 backdrop-blur">
            <sector.icon className="size-3.5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
            <span className="truncate">{sector.name}</span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-[11px] font-medium text-white/90">
            <MapPin className="size-3.5" aria-hidden="true" />
            {company.country}
          </span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-6">
        <img
          src={company.logo}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className={cn('mb-4 object-contain object-left', company.logoClass)}
        />

        <h3 className="text-xl font-semibold leading-snug text-navy-900">{company.name}</h3>
        <p className="mt-1 text-[13px] font-medium text-[var(--accent)]">{company.tagline}</p>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-600">{company.summary}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={company.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--accent)]"
          >
            Visit website
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens {company.websiteLabel} in a new tab)</span>
          </a>
          <Link
            to={`/companies/${company.slug}`}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-navy-500 transition hover:text-navy-900"
          >
            Overview
            <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
