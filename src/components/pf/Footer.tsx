import { credits, profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="foot">
      <span>{profile.name} · {profile.role}</span>
      <nav aria-label="Footer">
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
      <span className="credits">
        © {new Date().getFullYear()} · Photos:{' '}
        {credits.map((c, i) => (
          <span key={c.url}>
            {i > 0 && ', '}
            <a href={c.url} target="_blank" rel="noopener noreferrer">{c.by}</a> ({c.licence})
          </span>
        ))}
      </span>
    </footer>
  );
}
