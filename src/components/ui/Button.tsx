import type { ComponentProps, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-sans text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-brass-500 text-ink-950 shadow-[0_10px_24px_-12px_rgba(184,117,32,0.9)] hover:bg-brass-400 hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-ink-900 text-white shadow-[0_10px_24px_-12px_rgba(14,36,56,0.9)] hover:bg-ink-800 hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border border-white/50 text-white hover:border-white hover:bg-white hover:text-ink-900',
  ghost:
    'border border-ink-200 text-ink-900 hover:border-brass-500 hover:bg-brass-50 hover:text-brass-700',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-[11px]',
  md: 'px-5 py-3 text-[12px]',
  lg: 'px-7 py-3.5 text-[13px]',
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = CommonProps &
  Omit<ComponentProps<typeof Link>, 'to' | 'className' | 'children'> & {
    to: string;
    href?: never;
  };
type ButtonAsAnchor = CommonProps &
  Omit<ComponentProps<'a'>, 'href' | 'className' | 'children'> & {
    href: string;
    to?: never;
  };
type ButtonAsButton = CommonProps & ComponentProps<'button'> & { to?: never; href?: never };

export function Button(props: ButtonAsLink | ButtonAsAnchor | ButtonAsButton) {
  const { children, variant = 'primary', size = 'md', className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('to' in rest && rest.to) {
    const { to, ...linkRest } = rest as ComponentProps<typeof Link> & { to: string };
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ComponentProps<'a'> & { href: string };
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<'button'>)}>
      {children}
    </button>
  );
}
