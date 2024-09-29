import type { PropsWithChildren } from "react";

import { ErrorState } from "../../components/ErrorState";
import { Skeleton } from "../../components/Skeleton";

type ListWrapperProps = PropsWithChildren<{
    onTryAgain: () => void;
    status: 'error' | 'idle' | 'loading' | 'success';
}>;

export const ListWrapper = ({ children, onTryAgain, status }: ListWrapperProps) => {
    if (status === 'loading') {
        return (
            <section className="d-flex flex-column gap-3 mt-3 overflow-y-auto">
                <Skeleton height="120px" srLabel="Carregando as publicações" width="100%" />
                <Skeleton height="120px" srLabel="Carregando as publicações" width="100%" />
                <Skeleton height="120px" srLabel="Carregando as publicações" width="100%" />
                <Skeleton height="120px" srLabel="Carregando as publicações" width="100%" />
            </section>
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

