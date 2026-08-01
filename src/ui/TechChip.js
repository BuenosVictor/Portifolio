import { Link } from 'react-router-dom';

const styles = {
    HTML: { dot: 'bg-HTML', hover: 'hover:bg-HTML' },
    CSS: { dot: 'bg-CSS', hover: 'hover:bg-CSS' },
    Javascript: { dot: 'bg-JS', hover: 'hover:bg-JS' },
    JavaScript: { dot: 'bg-JS', hover: 'hover:bg-JS' },
    TypeScript: { dot: 'bg-TYPESCRIPT', hover: 'hover:bg-TYPESCRIPT' },
    React: { dot: 'bg-REACT', hover: 'hover:bg-REACT' },
    Tailwind: { dot: 'bg-TAILWIND', hover: 'hover:bg-TAILWIND' },
    Git: { dot: 'bg-GIT', hover: 'hover:bg-GIT' },
    Figma: { dot: 'bg-detail', hover: 'hover:bg-detail' },
    API: { dot: 'bg-API', hover: 'hover:bg-API' },
};

export function TechChip({ name }) {
    const style = styles[name] ?? { dot: 'bg-inkSoft', hover: 'hover:bg-ink/10' };

    return (
        <li>
            <Link
                to={`/habilidades#${name.toLowerCase()}`}
                className={`group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1 text-sm font-medium text-ink shadow-sm transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:text-white ${style.hover}`}
            >
                <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full transition-colors duration-300 group-hover:bg-current ${style.dot}`}
                />
                {name}
                <span className="sr-only">, ver o que eu faço com {name}</span>
            </Link>
        </li>
    );
}
