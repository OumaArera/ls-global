import { Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { contact, phones } from '@/data/site';

/**
 * The group has no published telephone number yet, so the bar leads with where
 * it operates and falls back to email. Add a number to `phones` and it appears.
 */
export function TopBar() {
  return (
    <div className="hidden bg-ink-950 text-ink-300 lg:block">
      <Container size="wide">
        <div className="flex items-center justify-between gap-6 py-2.5 text-[13px]">
          <ul className="flex items-center gap-6">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-brass-400" aria-hidden="true" />
              <span>
                {contact.regions.map((region) => region.label).join(' · ')}
              </span>
            </li>
          </ul>

          <ul className="flex items-center gap-6">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-brass-400" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="transition hover:text-white">
                {contact.email}
              </a>
            </li>
            {phones.length > 0 && (
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-brass-400" aria-hidden="true" />
                <a href={phones[0].href} className="font-semibold transition hover:text-white">
                  {phones[0].display}
                </a>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </div>
  );
}
