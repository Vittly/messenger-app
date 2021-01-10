import { IMessage } from '../../types';
import './MessageList.css';

interface IMessageList {
    items: IMessage[];
}

const MessageList: React.FC<IMessageList> = props => {
    return <div className="MessageList">
        {props.items.map(item =>
            <div className="MessageList-Item" key={item.id}>{item.text}</div>
        )}
    </div>;
};

export default MessageList;
