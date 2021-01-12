import { BehaviorSubject } from 'rxjs';
import { IUser, IMessage } from '../types';

// todo: get actual state from backend
export const userIdSubject = new BehaviorSubject<string>('user-1');
export const selectedFriendIdSubject = new BehaviorSubject<string | undefined>(undefined);
export const friendsSubject = new BehaviorSubject<IUser[]>([
    { id: 'user-2', name: 'Peter' },
    { id: 'user-3', name: 'Harry' }
]);
export const messagesSubject = new BehaviorSubject<IMessage[]>([
    {
        id: 'message-1',
        authorId: 'user-2',
        recipientId: 'user-1',
        text: 'Hi, call me. Have a lot to share'
    },
    {
        id: 'message-2',
        authorId: 'user-3',
        recipientId: 'user-1',
        text: 'Hey, are you still interested in that role?'
    }
]);
