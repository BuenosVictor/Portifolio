/**
 * Cabecalho padrao de secao. O "eyebrow" curto acima do titulo ajuda quem
 * escaneia a pagina em 30 segundos a saber onde esta sem ler o paragrafo.
 */
export function SectionHeading({ eyebrow, title, subtitle, id, align = 'center' }) {
    const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

    return (
        <div className={`flex flex-col gap-3 max-w-2xl ${alignment}`}>
            {eyebrow && (
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-secondaryL">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primaryL" />
                    {eyebrow}
                </span>
            )}
            <h2 id={id} className="text-3xl md:text-4xl font-black text-ink">
                {title}
            </h2>
            {subtitle && <p className="text-inkSoft md:text-lg leading-relaxed">{subtitle}</p>}
        </div>
    );
}

/** Cabecalho das paginas de detalhe (/projetos, /habilidades, /experiencia, /sobre-mim). */
export function PageHeader({ eyebrow, title, subtitle, children }) {
    return (
        <section className="pt-24 pb-8 md:pt-28 md:pb-10">
            <div className="container-page max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-secondaryL">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primaryL" />
                    {eyebrow}
                </span>
                <h1 className="mt-3 text-4xl md:text-5xl font-black text-ink">{title}</h1>
                {subtitle && (
                    <p className="mt-4 text-inkSoft md:text-lg leading-relaxed">{subtitle}</p>
                )}
                {children}
            </div>
        </section>
    );
}

export function Section({ id, labelledBy, className = '', children }) {
    return (
        <section id={id} aria-labelledby={labelledBy} className={`py-10 md:py-12 ${className}`}>
            <div className="container-page">{children}</div>
        </section>
    );
}
