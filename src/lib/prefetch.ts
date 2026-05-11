// Centralized lazy loaders to enable prefetching from anywhere.
// Vite caches dynamic imports, so calling these multiple times is a no-op after the first.

export const routeLoaders = {
  "/contato": () => import("@/pages/Contato"),
  "/termos": () => import("@/pages/Termos"),
  "/privacidade": () => import("@/pages/Privacidade"),
  "/faq": () => import("@/pages/FAQ"),
  "/trabalhe-conosco": () => import("@/pages/TrabalheConosco"),
  "/agentes-ia": () => import("@/pages/AgentesIA"),
  "/servicos-internos": () => import("@/pages/ServicosInternos"),
  "/sites-blogs": () => import("@/pages/SitesBlogs"),
  "/microsaas": () => import("@/pages/MicroSaas"),
} as const;

export type PrefetchableRoute = keyof typeof routeLoaders;

export const sectionLoaders = {
  AboutSection: () => import("@/components/AboutSection"),
  MarketingSection: () => import("@/components/MarketingSection"),
  SitesShowcaseSection: () => import("@/components/SitesShowcaseSection"),
  TestimonialsSection: () => import("@/components/TestimonialsSection"),
  FAQSection: () => import("@/components/FAQSection"),
  Footer: () => import("@/components/Footer"),
  ProgressiveBlur: () => import("@/components/ProgressiveBlur"),
} as const;

export const prefetchRoute = (path: string) => {
  const loader = (routeLoaders as Record<string, () => Promise<unknown>>)[path];
  if (loader) loader().catch(() => {});
};

type IdleCb = () => void;
const onIdle = (cb: IdleCb, timeout = 2000) => {
  if (typeof window === "undefined") return;
  const ric = (window as unknown as { requestIdleCallback?: (cb: IdleCb, opts?: { timeout: number }) => number })
    .requestIdleCallback;
  if (ric) ric(cb, { timeout });
  else setTimeout(cb, 200);
};

let routesPrefetched = false;
export const prefetchAllRoutesIdle = () => {
  if (routesPrefetched) return;
  routesPrefetched = true;
  onIdle(() => {
    Object.values(routeLoaders).forEach((load) => load().catch(() => {}));
  });
};

let sectionsPrefetched = false;
export const prefetchHomeSectionsIdle = () => {
  if (sectionsPrefetched) return;
  sectionsPrefetched = true;
  onIdle(() => {
    Object.values(sectionLoaders).forEach((load) => load().catch(() => {}));
  }, 500);
};
