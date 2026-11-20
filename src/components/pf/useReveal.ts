import { useEffect } from 'react';

/** Adds `.in` to every `.rise` element once it enters the viewport (one time).
 *  The page is fully visible without script: `.js` on <html> is what hides `.rise` first. */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('js');
    const els = Array.from(document.querySelectorAll<HTMLElement>('.rise'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    // Safety net: never leave content hidden.
    const t = window.setTimeout(() => els.forEach((el) => el.classList.add('in')), 4000);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);
}
