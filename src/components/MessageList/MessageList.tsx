import { useObservable } from 'rxjs-hooks';
import { userId$, selectedFriendMessages$ } from '../../state/observables';
import './MessageList.css';

const MessageList: React.FC = () => {
    const userId = useObservable(() => userId$);
    const selectedFriendMessages = useObservable(() => selectedFriendMessages$);

    return <div className="MessageList">
        {selectedFriendMessages && selectedFriendMessages.map(item =>
            <div
                key={item.id}
                data-type={userId === item.authorId ? 'out' : 'in'}
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
