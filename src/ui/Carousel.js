import { Children, useCallback, useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function Carousel({ label, children }) {
    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const slides = Children.toArray(children);
    const count = slides.length;

    const syncState = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;

        setAtStart(track.scrollLeft <= 1);
        setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);

        const items = Array.from(track.children);
        if (!items.length) return;

        const viewportCenter = track.scrollLeft + track.clientWidth / 2;
        const distances = items.map((el) =>
            Math.abs(el.offsetLeft + el.clientWidth / 2 - viewportCenter)
        );
        setIndex(distances.indexOf(Math.min(...distances)));
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let frame = null;
        const onScroll = () => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                frame = null;
                syncState();
            });
        };

        syncState();
        track.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', syncState);

        return () => {
            if (frame) cancelAnimationFrame(frame);
            track.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', syncState);
        };
    }, [syncState]);

    const goTo = (target) => {
        const track = trackRef.current;
        const item = track?.children[target];
        if (!item) return;
        track.scrollTo({
            left: item.offsetLeft - (track.clientWidth - item.clientWidth) / 2,
            behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        });
    };

    const step = (direction) => goTo(Math.min(Math.max(index + direction, 0), count - 1));

    const arrowClass =
        'grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-white text-ink shadow-sm transition-[background-color,opacity] duration-200 hover:bg-ink/5 disabled:cursor-default disabled:opacity-25 disabled:hover:bg-white';

    return (
        <div role="group" aria-roledescription="carrossel" aria-label={label}>
            <div className="relative">
                <ul
                    ref={trackRef}
                    tabIndex={0}
                    aria-label={`${label}, use as setas do teclado para navegar`}
                    className="snap-row carousel-track relative flex gap-6 overflow-x-auto scroll-smooth py-2"
                >
                    {slides.map((slide, i) => {
                        const isActive = i === index;
                        return (
                            <li
                                key={slide.key}
                                aria-roledescription="slide"
                                aria-label={`${i + 1} de ${count}`}
                                className={`snap-center shrink-0 transition-[opacity,transform] duration-500 ease-out ${
                                    isActive ? 'scale-100 opacity-100' : 'scale-[0.92] opacity-40'
                                }`}
                            >
                                <div
                                    aria-hidden={!isActive}
                                    className={`h-full ${isActive ? '' : 'pointer-events-none'}`}
                                >
                                    {slide}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="mt-3 flex items-center justify-center gap-3">
                <button type="button" onClick={() => step(-1)} disabled={atStart} className={arrowClass}>
                    <span aria-hidden="true" className="text-lg leading-none">
                        ‹
                    </span>
                    <span className="sr-only">Anterior</span>
                </button>

                <ul className="flex items-center gap-1">
                    {slides.map((slide, i) => (
                        <li key={slide.key}>
                            <button
                                type="button"
                                onClick={() => goTo(i)}
                                aria-current={i === index ? 'true' : undefined}
                                className="tap-target group grid place-items-center px-1.5 py-2"
                            >
                                <span
                                    className={`block h-2.5 rounded-full transition-[width,background-color] duration-300 ${
                                        i === index
                                            ? 'w-7 bg-ink'
                                            : 'w-2.5 bg-ink/25 group-hover:bg-ink/50'
                                    }`}
                                />
                                <span className="sr-only">Ir para o item {i + 1}</span>
                            </button>
                        </li>
                    ))}
                </ul>

                <button type="button" onClick={() => step(1)} disabled={atEnd} className={arrowClass}>
                    <span aria-hidden="true" className="text-lg leading-none">
                        ›
                    </span>
                    <span className="sr-only">Próximo</span>
                </button>
            </div>
        </div>
    );
}
