import { Modal as BootstrapModal } from "bootstrap";

import { useMemo } from "react";
import { useDeleteEvent } from "../../hooks/useDeleteEvent";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { Typography } from "../Typography";

type DeleteEventTemplateProps = {
  id: string | number;
};

export const DeleteEventTemplate = ({ id }: DeleteEventTemplateProps) => {
  const modalId = useMemo(() => `modal-delete-event-${id}`, [id]);
  const handleToggleModal = () => {
    const modal = BootstrapModal.getOrCreateInstance(
      document.getElementById(modalId)!
    );
    modal.toggle();
  };

  const { loading, deleteEvent } = useDeleteEvent({
    id,
    onToggleModal: handleToggleModal,
  });

  return (
    <>
      <Button onClick={handleToggleModal} variant="danger">
        Excluir
      </Button>
      <Modal
        actions={
          <>
            <Button
              loading={loading}
              onClick={() => void deleteEvent()}
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
          </>
        }
        id={modalId}
        title="Tem certeza que deseja excluir o evento?"
      >
        <Typography component="p" variant="paragraph-lg-regular">
          Atenção, pois essa ação não poderá ser desfeita.
        </Typography>
      </Modal>
    </>
  );
};
