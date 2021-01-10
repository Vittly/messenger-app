import { IMessage } from '../types';

export interface IState {
    messages: IMessage[];
}

export interface ISendAction {
    type: 'send';
    text: string;
}

export interface IEvents {
    onSend: (text: string) => void;
}

export type TAction = ISendAction;
export type TDispatch = (action: TAction) => void;
