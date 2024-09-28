import { useMemo } from 'react';

import { Modal as BootstrapModal } from 'bootstrap';

import { Button } from "../Button";
import { Modal } from "../Modal";
import { Typography, TypographyVariant } from "../Typography";
import { useDeletePost } from "../../hooks/useDeletePost";

type DeletePostTemplateProps = {
    postId: string | number;
};

export const DeletePostTemplate = ({ postId }: DeletePostTemplateProps) => {
    const modalId = useMemo(() => (`modal-delete-post-${postId}`), [postId])

    const { loading, deletePost } = useDeletePost(postId)

    const handleToggleModal = () => {
        const modal = BootstrapModal.getOrCreateInstance(document.getElementById(modalId)!);
        modal.toggle();
    };

    return (
        <>
            <Button onClick={handleToggleModal} variant="danger">
                Excluir
            </Button>
            <Modal actions={<>
                <Button
                    loading={loading}
                    onClick={() => void deletePost()}
                    variant="danger"
                >
                    Excluir
                </Button>
                <Button
                    disabled={loading}
                    onClick={handleToggleModal}
                    variant="secondary"
                >
                    Cancelar
                </Button>
            </>}
                id={modalId}
                title="Tem certeza que deseja excluir a publicação?"
            >
                <Typography component="p" variant={TypographyVariant['paragraph-lg-regular']}>
                    Atenção, pois essa ação não poderá ser desfeita.
                </Typography>
            </Modal>
        </>
    );
};
