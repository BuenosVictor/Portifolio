import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Button } from '../ui/Button';

export function ErrorPage() {
    const error = useRouteError();
    const isNotFound = isRouteErrorResponse(error) && error.status === 404;

    return (
        <main className="grid min-h-screen place-items-center bg-surface px-6">
            <div className="flex max-w-lg flex-col items-center gap-6 text-center">
                <p className="text-7xl md:text-8xl font-black text-primaryL">
                    {isNotFound ? '404' : 'Ops!'}
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-ink">
                    {isNotFound ? 'Essa página não existe' : 'Algo deu errado por aqui'}
                </h1>

                <p className="text-inkSoft leading-relaxed">
                    {isNotFound
                        ? 'O link pode estar desatualizado ou ter sido digitado errado. Que tal voltar para o início?'
                        : 'Tive um problema para carregar esta página. Tente recarregar ou voltar para o início.'}
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                    <Button to="/" variant="primary" size="lg">
                        Voltar para o início
                    </Button>
                    <Button to="/projetos" variant="outline" size="lg">
                        Ver os projetos
                    </Button>
                </div>
            </div>
        </main>
    );
}
