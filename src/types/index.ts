export interface IUser {
    id: string;
    name: string;
}

export interface IMessage {
    id: string;
    authorId: string;
    recipientId: string;
    text: string;
}
