import { IMessage } from '../../types';
import './MessageList.css';

interface IMessageList {
    userId: string;
    items: IMessage[];
}

const MessageList: React.FC<IMessageList> = props => {
    return <div className="MessageList">
        {props.items.map(item =>
            <div
                key={item.id}
                data-type={props.userId === item.authorId ? 'out' : 'in'}
                className="MessageList-Item"
            >
                <div className="MessageList-ItemBubble">
                    {item.text}
                </div>
            </div>
        )}
    </div>;
};

export default MessageList;
