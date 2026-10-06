export const SERVICE_CATEGORIES = [
  { slug: 'ludoteca', name: 'Ludoteca', href: '/servizi/ludoteca' },
  { slug: 'educativa', name: 'Educativa', href: '/servizi/educativa' },
  { slug: 'campus', name: 'Campus', href: '/servizi/campus' },
  { slug: 'tutoraggio', name: 'Tutoraggio', href: '/servizi/tutoraggio' },
  { slug: 'psicologia', name: 'Consulenze', href: '/servizi/psicologia' },
] as const;

export type ServiceCategorySlug = (typeof SERVICE_CATEGORIES)[number]['slug'];

export function servicePath(slug: string): string {
  const normalized = slug === 'consulenze' ? 'psicologia' : slug;
  return `/servizi/${normalized}`;
}
