import { IMessage } from '../types';
import { IState } from './types';

export function stateMessageFilterCallback(state: IState, message: IMessage): boolean {
    return (
        // outgoing message
        (message.authorId === state.userId && message.recipientId === state.selectedFriendId) ||
        // incoming message
        (message.authorId === state.selectedFriendId && message.recipientId === state.userId)
    );
}
