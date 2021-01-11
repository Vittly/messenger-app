import React from 'react';
import { useStateEvents } from '../../state/hooks';
import { stateMessageFilterCallback } from '../../state/utils';
import FriendList from '../FriendList/FriendList';
import MessageList from '../MessageList/MessageList';
import Form from '../Form/Form';

import './App.css';

const App = () => {
    const [state, events] = useStateEvents();
    const sendToSelectedFriend = React.useCallback(
        (text: string) => state.selectedFriendId && events.onSend(state.userId, state.selectedFriendId, text),
        [state.selectedFriendId]
    );

    return <div className="App">
        <div className="App-LeftPanel">
            <FriendList
                items={state.friends}
                selectedId={state.selectedFriendId}
                onSelect={events.onSelectFriend}
            />
        </div>
        <div className="App-RightPanel">
            {
                state.selectedFriendId ?
                    <>
                        <MessageList
                            userId={state.userId}
                            items={state.messages.filter(m => stateMessageFilterCallback(state, m))}
                        />
                        <Form onSend={sendToSelectedFriend} />
                    </> :
                    null
            }
        </div>
    </div>;
};

export default App;
