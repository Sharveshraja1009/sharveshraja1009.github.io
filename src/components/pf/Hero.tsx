import { asset, profile } from '@/data/profile';
import ThemeToggle from './ThemeToggle';

/** The name split to two corners, pinned for two screens: the hero and the place panel. */
export default function Hero() {
  const [a, b] = profile.nameHalves;
  return (
    <div className="pin-run">
      <div className="pin-layer">
        <h1 className="pin-stick" aria-label={`${profile.name}, ${profile.role.toLowerCase()} in Puducherry`}>
          <span className="pin-word tl">{a}</span>
          <span className="pin-word br">{b}</span>
        </h1>
      </div>

      <header className="topbar">
        <nav aria-label="Sections" style={{ display: 'flex', gap: 20 }}>
          <a className="link" href="#work">Work</a>
          <a className="link" href="#experience">Experience</a>
          <a className="link" href="#contact">Contact</a>
        </nav>
        <ThemeToggle />
      </header>

      <section className="panel hero" aria-label="Introduction">
        <div className="hero-stage">
          <div className="hero-copy">
            <p className="hero-lead">
              {profile.name}, {profile.role.toLowerCase()} in Puducherry
            </p>
            <p>
              I work on the web and mobile apps behind Rent Pondy, Pondicherry Matrimony and Pondy Job, and build sites for local
              businesses.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#work">
                See the work <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a className="link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              {profile.linkedin && (
                <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              )}
              <a className="link" href={asset(profile.resume)} target="_blank" rel="noopener">Resume (PDF)</a>
            </div>
          </div>
        </div>
        <figure className="hero-photo">
          <img
            src={asset('work/pondy-french-quarter.webp')}
            width={1200}
            height={1500}
            alt="Coconut and juice carts under the trees on a French Quarter street in Puducherry"
            fetchPriority="high"
          />
        </figure>
      </section>

      <section className="panel place" aria-labelledby="place-title">
        <h2 id="place-title" className="sr-only">Based in Puducherry</h2>
        <figure className="rise">
          <img
            src={asset('work/pondy-promenade.webp')}
            width={1800}
            height={1100}
            loading="lazy"
            alt="Le Café on the beach promenade in Puducherry at dusk"
          />
        </figure>
        <p className="rise" style={{ ['--i' as string]: 1 }}>
          Most of what I ship is used by people in this town: renters, families, job seekers and the shops on its streets.
        </p>
      </section>
    </div>
  );
}
