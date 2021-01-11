import { IMessage, IUser } from '../types';

export interface IState {
    userId: string;
    selectedFriendId?: string;
    messages: IMessage[];
    friends: IUser[];
}

export interface ISendAction {
    type: 'send';
    authorId: string;
    recipientId: string;
    text: string;
}

export interface ISelectFriendAction {
    type: 'select-friend';
    friendId: string;
}

export interface IEvents {
    onSend: (authorId: string, recipientId: string, text: string) => void;
    onSelectFriend: (friendId: string) => void;
}

export type TAction = ISendAction | ISelectFriendAction;
export type TDispatch = (action: TAction) => void;
