import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { MeridianTexture } from '@/components/ui/PageHero';
import { companies } from '@/data/companies';
import { contact, phones, site } from '@/data/site';

const groupLinks = [
  { label: 'About the group', href: '/about' },
  { label: 'Our companies', href: '/companies' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-300">
      <MeridianTexture />

      <Container size="wide" className="relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* Identity */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={site.logo} alt="" className="h-12 w-auto object-contain" width={56} height={48} />
              <span className="leading-tight">
                <span className="block font-display text-lg font-semibold tracking-tight text-white">
                  LS Global <span className="text-leaf-400">Holdings</span>
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-navy-400">
                  {site.tagline}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-400">
              {site.description}
            </p>
            <p className="mt-4 text-xs text-navy-500">
              Registered as {site.legalName}.
            </p>
          </div>

          {/* The hub: every operating company's own site */}
          <div className="sm:col-span-2 lg:col-span-5">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf-400">
              Our companies
            </h2>
            <ul className="mt-5 space-y-3">
              {companies.map((company) => (
                <li key={company.slug}>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-baseline justify-between gap-4 border-b border-white/5 pb-3 transition hover:border-leaf-500/40"
                  >
                    <span className="text-sm font-medium text-navy-100 transition group-hover:text-white">
                      {company.name}
                    </span>
                    <span className="flex shrink-0 items-center gap-1 text-xs text-navy-500 transition group-hover:text-leaf-400">
                      {company.websiteLabel}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Group */}
          <div className="lg:col-span-3">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf-400">
              Group
            </h2>
            <ul className="mt-5 space-y-2.5">
              {groupLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-navy-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf-400">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-leaf-500" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="transition hover:text-white">
                  {contact.email}
                </a>
              </li>
              {phones.length > 0 && (
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 size-4 shrink-0 text-leaf-500" aria-hidden="true" />
                  <a href={phones[0].href} className="transition hover:text-white">
                    {phones[0].display}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-leaf-500" aria-hidden="true" />
                <span className="text-navy-400">
                  {contact.regions.map((region) => region.label).join(' · ')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-navy-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Built by{' '}
            <a
              href="https://zafrika.com"
              target="_blank"
              rel="noreferrer"
              className="text-navy-400 transition hover:text-leaf-400"
            >
              Zafrika
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
