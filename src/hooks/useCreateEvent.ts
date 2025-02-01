import type { EventPayload } from "../api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { postEvent } from "../api";
import { useErrorHandler } from "./useErrorHandler";
import { usePermission } from "./usePermission";
import { useSnackbar } from "./useSnackbar";
import { Paths } from "../routes/paths";

export const useCreateEvent = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { errorHandler } = useErrorHandler();
    const { token } = usePermission();
    const { setSnackbar } = useSnackbar();

    const saveEvent = async (data: EventPayload): Promise<any> => {
        setLoading(true);
        try {
            await postEvent(token, data)

            setSnackbar({
                closable: true,
                message: 'Evento criado com sucesso.',
                variant: 'success'
            });

            navigate(Paths.CALENDAR);
        } catch (e: unknown) {
            errorHandler(e, 'Não foi possível criar o evento. Por favor, tente novamente mais tarde.');
        } finally {
            setLoading(false)
        }
    };

    return {
        loading,
        saveEvent,
    };
};
