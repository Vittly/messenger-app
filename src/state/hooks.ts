import { useReducer, useMemo } from 'react';
import { reducer, initialState } from './core';
import {
    IState,
    IEvents,
    TDispatch
} from './types';

function getEvents(dispatch: TDispatch): IEvents {
    return {
        onSend: text => dispatch({ type: 'send', text })
    };
}

export function useStateEvents(): [IState, IEvents] {
    const [state, dispatch] = useReducer(reducer, initialState);
    const events = useMemo(() => getEvents(dispatch), [dispatch]);

    return [state, events];
};
