import { IState, TAction } from './types';

// todo: get actual state from backend
export const initialState: IState = {
    userId: 'user-1',
    friends: [
        { id: 'user-2', name: 'Peter' },
        { id: 'user-3', name: 'Harry' },
    ],
    messages: [
        { id: 'message-1', authorId: 'user-2', recipientId: 'user-1', text: 'Hi, call me. Have a lot to share' },
        { id: 'message-2', authorId: 'user-3', recipientId: 'user-1', text: 'Hey, are you still interested in that role?' }
    ]
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
                ...state,
                messages: state.messages.concat({
                    id: getNextId(),
                    text: action.text,
                    authorId: action.authorId,
                    recipientId: action.recipientId
                })
            };

        case 'select-friend':
            return {
                ...state,
                selectedFriendId: action.friendId
            };

        default:
            return state;
    }
}
