import type { EventsResponse, UserProfile } from "../api";

import { useState } from 'react';

import { getEvents } from "../api";

type RequestStatus = 'idle' | 'error' | 'loading' | 'success';

export const useListEvents = () => {
    const [eventsList, setEventsList] = useState<Array<EventsResponse>>([])
    const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle')

    const getEventsList = async (profile: UserProfile) => {
        setRequestStatus('loading');
        try {
            const data = await getEvents(profile);
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
