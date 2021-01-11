import { IUser } from '../../types';
import './FriendList.css';

interface IFriendList {
    items: IUser[];
    selectedId?: string;
    onSelect: (friendId: string) => void;
}

const FriendList: React.FC<IFriendList> = props => {
    return <div className="FriendList">
        {props.items.map(item =>
            <div
                key={item.id}
                className="FriendList-Item"
                data-selected={props.selectedId === item.id ? true : null}
                onClick={() => props.onSelect(item.id)}
            >
                {item.name}
            </div>
        )}
    </div>;
};

export default FriendList;
