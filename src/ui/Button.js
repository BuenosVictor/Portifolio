import { Link } from 'react-router-dom';

const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5';

const variants = {
    // Amarelo da marca com texto escuro: 12,2:1 de contraste.
    primary: 'bg-primaryL text-ink shadow-sm hover:bg-primaryHover hover:shadow-md',
    dark: 'bg-ink text-white shadow-sm hover:bg-black hover:shadow-md',
    blue: 'bg-secondaryL text-white shadow-sm hover:bg-secondaryHover hover:shadow-md',
    outline: 'border-2 border-ink/15 bg-white text-ink hover:border-ink/40 hover:shadow-sm',
    ghost: 'text-secondaryL underline underline-offset-4 hover:text-secondaryHover',
};

const sizes = {
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base',
};

/**
 * Renderiza <Link> para rota interna, <a> para link externo e <button> para acao.
 * Links externos ganham rel/target e um aviso para leitor de tela.
 */
export function Button({
    children,
    variant = 'primary',
    size = 'md',
    to,
    href,
    external = false,
    className = '',
    ...rest
}) {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes} {...rest}>
                {children}
            </Link>
        );
    }

    if (href) {
        const externalProps = external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {};
        return (
            <a href={href} className={classes} {...externalProps} {...rest}>
                {children}
                {external && <span className="sr-only"> (abre em uma nova aba)</span>}
            </a>
        );
    }

    return (
        <button type="button" className={classes} {...rest}>
            {children}
        </button>
    );
}
