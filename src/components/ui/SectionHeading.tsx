import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'center',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={cn('max-w-3xl', centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <div
          className={cn(
            'mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em]',
            centered && 'justify-center',
            tone === 'dark' ? 'text-brass-600' : 'text-brass-300',
          )}
        >
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {eyebrow}
          {centered && <span className="h-px w-8 bg-current" aria-hidden="true" />}
        </div>
      )}
      <h2
        className={cn(
          'text-3xl font-semibold leading-[1.15] sm:text-4xl',
          tone === 'light' && 'text-white',
        )}
      >
        {title}
      </h2>
      {body && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed',
            tone === 'dark' ? 'text-ink-600' : 'text-ink-200',
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}
