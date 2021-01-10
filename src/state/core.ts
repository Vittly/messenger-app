import { IState, TAction } from './types';

// todo: make it empty, and get actual state from backend
export const initialState: IState = {
    messages: [{ id: 'id-1', text: 'Hello guys' }]
};

// todo: replace with UUID or something
let idCount = 0;
function getNextId() {
    return `id-${idCount++}`;
}

export function reducer(state: IState, action: TAction): IState {
    switch (action.type) {
        case 'send':
            return {
                messages: state.messages.concat({ id: getNextId(), text: action.text })
            };

        default:
            return state;
    }
}
