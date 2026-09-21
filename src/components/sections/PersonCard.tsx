import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { initials, type Person } from '@/data/leadership';
import { cn } from '@/lib/cn';

/**
 * Where no photograph was supplied the card falls back to an initials
 * monogram in group colours, rather than a stock portrait of someone else.
 */
export function PersonCard({ person, className }: { person: Person; className?: string }) {
  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-xl border border-ink-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift',
        className,
      )}
    >
      <div className="relative aspect-[4/5] shrink-0 overflow-hidden bg-ink-900">
        {person.photo ? (
          <img
            src={person.photo}
            alt={`${person.name}, ${person.boardRole}`}
            loading="lazy"
            className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex size-full items-center justify-center bg-gradient-to-br from-ink-800 to-ink-950"
            aria-hidden="true"
          >
            <span className="font-display text-6xl font-semibold text-brass-400/80">
              {initials(person.name)}
            </span>
          </div>
        )}
        {!person.executive && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-700 backdrop-blur">
            Non-Executive
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-snug text-ink-900">{person.name}</h3>
        <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.08em] text-brass-600">
          {person.boardRole}
        </p>

        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-600">{person.lead}</p>

        <p className="mt-4 flex items-center gap-1.5 text-xs text-ink-500">
          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
          {person.based}
        </p>

        <Link
          to={`/leadership/${person.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-800 transition hover:text-brass-700"
        >
          Read full profile
          <ArrowRight
            className="size-4 transition group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
