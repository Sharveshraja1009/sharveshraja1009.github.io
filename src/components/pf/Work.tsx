import { useEffect, useRef, useState } from 'react';
import { asset, work } from '@/data/profile';

/** Live product names pass a held square; the square shows the product crossing its centre. */
export default function Work() {
  const [current, setCurrent] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const links = Array.from(listRef.current?.querySelectorAll<HTMLElement>('[data-idx]') ?? []);
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setCurrent(Number((e.target as HTMLElement).dataset.idx));
      },
      { rootMargin: '-49% 0px -49% 0px' }
    );
    links.forEach((l) => io.observe(l));
    return () => io.disconnect();
  }, []);

  const item = work[current];
  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="work-frame-track" aria-hidden="true">
      <div className="work-frame-wrap">
        <span className="work-fact l">{item.kind}</span>
        <div className="work-frame">
          {work.map((w, i) => (
            <img
              key={w.name}
              src={asset(w.image)}
              width={900}
              height={900}
              loading="lazy"
              alt=""
              className={i === current ? 'on' : undefined}
            />
          ))}
        </div>
        <span className="work-fact r">{item.where}</span>
      </div>
      </div>
      <ul className="work-list" ref={listRef}>
        <li>
          <h2 id="work-title">Live work</h2>
        </li>
        {work.map((w, i) => (
          <li key={w.name}>
            <a
              href={w.url}
              target="_blank"
              rel="noopener noreferrer"
              data-idx={i}
              className={i === current ? 'current' : undefined}
              aria-label={`${w.name}: ${w.kind}, ${w.where} (opens the live site)`}
            >
              {w.name}
            </a>
            {i === current && (
              <p className="work-meta-phone" aria-hidden="true">
                {w.kind} · {w.where}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
