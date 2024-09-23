import type { PropsWithChildren, ReactNode } from "react";

import { Typography, TypographyVariant } from "../Typography";

type ModalProps = PropsWithChildren<{
    actions?: ReactNode;
    id: string;
    title: string;
}>;

export const Modal = ({
    actions,
    children,
    id,
    title
}: ModalProps) => (
    <div id={id} className="modal fade" tabIndex={-1} aria-labelledby={id} aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <Typography component="h1" variant={TypographyVariant['subtitle-medium']}>{title}</Typography>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Fechar caixa de diálogo"
                    >
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                {actions ? <div className="modal-footer">{actions}</div> : null}
            </div>
        </div>
    </div >
);