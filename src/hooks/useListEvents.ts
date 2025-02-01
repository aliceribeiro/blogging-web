import type { EventsResponse } from "../api";

import { useState } from 'react';

import { getEvents } from "../api";
import { UserProfiles } from "../model/enums/UserProfiles";

type RequestStatus = 'idle' | 'error' | 'loading' | 'success';

export const useListEvents = () => {
    const [eventsList, setEventsList] = useState<Array<EventsResponse>>([])
    const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle')

    const getEventsList = async (profile?: UserProfiles) => {
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
