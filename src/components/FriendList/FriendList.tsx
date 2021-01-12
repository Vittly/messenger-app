import { useObservable } from 'rxjs-hooks';
import { friends$, selectedFriendId$ } from '../../state/observables';
import { onSelectFriend } from '../../state/callbacks';
import './FriendList.css';

const FriendList: React.FC = () => {
    const friends = useObservable(() => friends$);
    const selectedFriendId = useObservable(() => selectedFriendId$);

    return <div className="FriendList">
        {friends && friends.map(item =>
            <div
                key={item.id}
                className="FriendList-Item"
                data-selected={selectedFriendId === item.id ? true : null}
                onClick={() => onSelectFriend(item.id)}
            >
                {item.name}
            </div>
        )}
    </div>;
};

export default FriendList;
