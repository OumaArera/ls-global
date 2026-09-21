import { useState, type FormEvent } from 'react';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { companies } from '@/data/companies';
import { contact } from '@/data/site';
import { cn } from '@/lib/cn';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

const subjects = [
  'Group / holding company',
  ...companies.map((company) => company.name),
  'Partnership or investment',
  'Media or press',
  'Careers',
];

/**
 * POSTs JSON to VITE_CONTACT_ENDPOINT when it is configured. With no endpoint
 * the submit button hands off to the visitor's mail client instead, so the
 * form is never a dead end.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot: real people leave this hidden field empty.
    if (data.company_website) return;

    if (!endpoint) {
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Organisation: ${data.organisation || '—'}`,
        `Regarding: ${data.subject}`,
        '',
        String(data.message ?? ''),
      ].join('\n');
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        `Website enquiry — ${data.subject}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" autoComplete="name" required />
        <Field label="Email address" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Organisation" name="organisation" autoComplete="organization" />
        <div>
          <label htmlFor="subject" className={labelClass}>
            Regarding
          </label>
          <select id="subject" name="subject" className={cn(controlClass, 'bg-white')} defaultValue={subjects[0]}>
            {subjects.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={controlClass} />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              Send enquiry
              <Send className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>

        <p aria-live="polite" className="text-sm">
          {status === 'sent' && (
            <span className="font-medium text-leaf-700">
              Thank you — we will be in touch.
            </span>
          )}
          {status === 'error' && (
            <span className="font-medium text-red-700">
              Something went wrong. Please email{' '}
              <a href={`mailto:${contact.email}`} className="underline">
                {contact.email}
              </a>
              .
            </span>
          )}
        </p>
      </div>
    </form>
  );
}

const labelClass = 'mb-1.5 block text-[13px] font-semibold text-navy-800';
const controlClass =
  'w-full rounded-md border border-navy-200 px-3.5 py-2.5 text-[15px] text-navy-900 transition placeholder:text-navy-400 focus:border-leaf-500 focus:outline-none focus:ring-2 focus:ring-leaf-500/25';

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
};

function Field({ label, name, type = 'text', required, autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && <span className="text-leaf-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={controlClass}
      />
    </div>
  );
}
