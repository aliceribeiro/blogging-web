import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { deleteEvent as deleteEventService } from "../api";
import { useErrorHandler } from "./useErrorHandler";
import { usePermission } from "./usePermission";
import { useSnackbar } from "./useSnackbar";
import { Paths } from "../routes/paths";

type UseDeleteParams = {
    id: string | number;
    onToggleModal: () => void;
};

export const useDeleteEvent = ({ id, onToggleModal }: UseDeleteParams) => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { errorHandler } = useErrorHandler();
    const { token } = usePermission();
    const { setSnackbar } = useSnackbar();

    const deleteEvent = async () => {
        setLoading(true);
        try {
            await deleteEventService(id, token);

            setSnackbar({
                closable: true,
                message: 'Evento excluído com sucesso.',
                variant: 'success',
            });

            navigate(Paths.CALENDAR);
        } catch (e: unknown) {
            errorHandler(e, 'Não foi possível excluir o evento. Por favor, tente novamente mais tarde.');
        } finally {
            onToggleModal();
            setLoading(false);
        }
    };

    return {
        loading,
        deleteEvent,
    };
};
