import { useEffect } from 'react';
import { site } from '@/data/site';

type Seo = {
  title: string;
  description?: string;
  /** Pass false on the home page, where the title already names the group. */
  suffix?: boolean;
};

const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const setCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

/** Keeps the document title, key meta tags and canonical URL in sync with the route. */
export function useSeo({ title, description, suffix = true }: Seo) {
  useEffect(() => {
    const fullTitle = suffix ? `${title} | ${site.name}` : title;
    document.title = fullTitle;

    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setCanonical(new URL(window.location.pathname, site.url).href);

    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description);
      setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    }
  }, [title, description, suffix]);
}
