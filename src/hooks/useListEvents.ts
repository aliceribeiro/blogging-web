import type { EventsResponse } from "../api";

import { useState } from 'react';

import { getEvents } from "../api";

type RequestStatus = 'idle' | 'error' | 'loading' | 'success';

export const useListEvents = () => {
    const [eventsList, setEventsList] = useState<Array<EventsResponse>>([])
    const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle')

    const getEventsList = async () => {
        setRequestStatus('loading');
        try {
            const data = await getEvents();
            setEventsList(data);
            setRequestStatus('success');
        } catch {
            setRequestStatus('error');
        };
    };

    return {
        eventsList,
        getEventsList,
        requestStatus,
    };
};
