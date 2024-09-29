import type { PropsWithChildren } from "react";

import { ErrorState } from "../../components/ErrorState";
import { Skeleton } from "../../components/Skeleton";

import "./styles.css";

type ListWrapperProps = PropsWithChildren<{
    onTryAgain: () => void;
    status: 'error' | 'idle' | 'loading' | 'success';
}>;

export const ListWrapper = ({ children, onTryAgain, status }: ListWrapperProps) => {
    if (status === 'loading') {
        return (
            <section className="list-container">
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
        <section className="list-container">
            {children}
        </section>
    );
};

