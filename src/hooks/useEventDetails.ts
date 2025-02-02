import type { EventsResponse } from "../api";

import { useCallback, useState } from "react";

import { getEventById } from "../api";

type RequestStatus = 'idle' | 'error' | 'loading' | 'success';

export const useEventDetails = (id: string | number) => {
    const [event, setEvent] = useState<EventsResponse | null>(null)
    const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle')

    const getEventDetails = useCallback(async () => {
        setRequestStatus('loading');
        try {
            const data = await getEventById(id);
            setEvent(data);
            setRequestStatus('success');
        } catch {
            setRequestStatus('error');
        }
    }, [id]);

    return {
        event,
        getEventDetails,
        requestStatus,
    };
};
