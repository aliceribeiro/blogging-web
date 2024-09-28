import type { PropsWithChildren } from "react";

import { ErrorState } from "../../components/ErrorState";

type ListWrapperProps = PropsWithChildren<{
    onTryAgain: () => void;
    status: 'error' | 'idle' | 'loading' | 'success';
}>;

export const ListWrapper = ({ children, onTryAgain, status }: ListWrapperProps) => {
    if (status === 'loading') {
        return (
            <p>CARREGAR KD MEU COMPONENTE</p>
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
