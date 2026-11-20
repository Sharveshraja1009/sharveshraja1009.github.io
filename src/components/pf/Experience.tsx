import { experience } from '@/data/profile';

export default function Experience() {
  return (
    <section id="experience" className="section xp" aria-labelledby="xp-title">
      <h2 id="xp-title" className="rise">Where I've worked</h2>
      <ol className="xp-list">
        {experience.map((x) => (
          <li key={x.org} className="xp-item">
            <span className="xp-when rise">{x.when}</span>
            <div>
              <h3 className="rise" style={{ ['--i' as string]: 1 }}>{x.org}</h3>
              <p className="xp-role rise" style={{ ['--i' as string]: 1 }}>{x.role}</p>
              <p className="xp-summary rise" style={{ ['--i' as string]: 2 }}>{x.summary}</p>
              <ul className="rise" style={{ ['--i' as string]: 3 }}>
                {x.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
