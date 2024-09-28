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
            <section style={{ display: 'flex', flexDirection: 'column', gap: '24px', overflowY: 'auto' }}>
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
        <>
            {children}
        </>
    );
};

