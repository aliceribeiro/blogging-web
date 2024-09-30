import type { PropsWithChildren } from "react";

import { ErrorState } from "../../components/ErrorState";
import { Skeleton } from "../../components/Skeleton";
import { Spinner } from "../../components/Spinner";

type PageContentWrapperProps = PropsWithChildren<{
    onTryAgain: () => void;
    status: 'error' | 'idle' | 'loading' | 'success';
    variant?: 'list' | 'circular';
}>;

export const PageContentWrapper = ({
    children,
    onTryAgain,
    status,
    variant = 'list'
}: PageContentWrapperProps) => {
    if (status === 'loading') {
        return (
            <>
                {variant === 'circular' ? <Spinner /> : (
                    <section className="d-flex flex-column gap-3 mt-3 overflow-y-auto">
                        <Skeleton
                            height="120px"
                            srLabel="Carregando as publicações"
                            width="100%"
                        />
                        <Skeleton
                            height="120px"
                            srLabel="Carregando as publicações"
                            width="100%"
                        />
                        <Skeleton
                            height="120px"
                            srLabel="Carregando as publicações"
                            width="100%"
                        />
                        <Skeleton
                            height="120px"
                            srLabel="Carregando as publicações"
                            width="100%"
                        />
                    </section>
                )}
            </>
        );
    };

    if (status === 'error') {
        return (
            <ErrorState onTryAgain={onTryAgain} />
        );
    };

    return (
        <section className="d-flex flex-column gap-3 mt-3 overflow-y-auto">
            {children}
        </section>
    );
};
