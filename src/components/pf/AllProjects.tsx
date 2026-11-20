import { useState } from 'react';
import { filters, projects } from '@/data/profile';

/** Every project in one table at one size. The live thing: pick a technology, see where it was used. */
export default function AllProjects() {
  const [tech, setTech] = useState<string | null>(null);
  const matches = tech ? projects.filter((p) => p.stack.includes(tech)).length : projects.length;

  return (
    <section id="projects" className="section all" aria-labelledby="all-title">
      <div className="all-head">
        <h2 id="all-title" className="rise">Everything I've built</h2>
        <div className="filter rise" role="group" aria-label="Filter projects by technology" style={{ ['--i' as string]: 1 }}>
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className="chip"
              aria-pressed={tech === f}
              onClick={() => setTech(tech === f ? null : f)}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="filter-status" aria-live="polite">
          {tech ? `${matches} of ${projects.length} projects use ${tech}` : `${projects.length} projects`}
        </p>
      </div>

      <table className="table rise" style={{ ['--i' as string]: 2 }}>
        <thead>
          <tr>
            <th scope="col">Project</th>
            <th scope="col">What it is</th>
            <th scope="col">Stack</th>
            <th scope="col" style={{ textAlign: 'right' }}>Made</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => {
            const link = p.url ?? p.repo;
            const dim = tech !== null && !p.stack.includes(tech);
            return (
              <tr key={p.name} className={dim ? 'dim' : undefined}>
                <td>
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {p.name}
                      <span className="ext" aria-hidden="true">↗</span>
                      <span className="sr-only"> ({p.url ? 'live site' : 'source code'}, opens in a new tab)</span>
                    </a>
                  ) : (
                    p.name
                  )}
                </td>
                <td className="what">{p.what}</td>
                <td className="stack">{p.stack.join(', ')}</td>
                <td className="year">{[p.where, p.year].filter(Boolean).join(' · ')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
