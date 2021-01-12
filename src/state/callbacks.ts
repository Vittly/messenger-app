import { getNextId } from './utils';
import {
    messagesSubject,
    selectedFriendIdSubject
} from './subjects';

export function onSend(authorId: string, recipientId: string, text: string) {
    messagesSubject.next(
        messagesSubject.value.concat({
            id: getNextId(),
            text,
            authorId,
            recipientId
        })
    )
};

export function onSelectFriend(friendId: string) {
    selectedFriendIdSubject.next(friendId);
};
