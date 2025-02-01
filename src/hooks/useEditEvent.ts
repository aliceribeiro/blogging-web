import type { EventPayload } from "../api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { putEvent } from "../api";
import { useErrorHandler } from "./useErrorHandler";
import { usePermission } from "./usePermission";
import { useSnackbar } from "./useSnackbar";
import { Paths } from "../routes/paths";

export const useEditEvent = (id: string | number) => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { errorHandler } = useErrorHandler();
    const { token } = usePermission();
    const { setSnackbar } = useSnackbar();

    const editEvent = async (data: EventPayload) => {
        setLoading(true);
        try {
            await putEvent(id, token, data);

            setSnackbar({
                closable: true,
                message: 'Evento atualizado com sucesso.',
                variant: 'success'
            });

            navigate(Paths.CALENDAR);
        } catch (e: unknown) {
            errorHandler(e, 'Não foi possível salvar a edição. Por favor, tente novamente mais tarde.');
        } finally {
            setLoading(false);
        };
    };

    return {
        loading,
        editEvent,
    };
};
