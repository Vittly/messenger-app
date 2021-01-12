import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    userIdSubject,
    selectedFriendIdSubject,
    friendsSubject,
    messagesSubject
} from './subjects';

export const userId$ = userIdSubject.asObservable();
export const selectedFriendId$ = selectedFriendIdSubject.asObservable();
export const friends$ = friendsSubject.asObservable();
export const messages$ = messagesSubject.asObservable();

export const selectedFriendMessages$ = combineLatest([userId$, selectedFriendId$, messages$]).pipe(
    map(([userId, selectedFriendId, messages]) =>
        messages.filter(m =>
            // outgoing message
            (m.authorId === userId && m.recipientId === selectedFriendId) ||
            // incoming message
            (m.authorId === selectedFriendId && m.recipientId === userId)
        )
    )
);
