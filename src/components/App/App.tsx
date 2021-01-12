import React from 'react';
import { useObservable } from 'rxjs-hooks';
import { selectedFriendId$ } from '../../state/observables';
import FriendList from '../FriendList/FriendList';
import MessageList from '../MessageList/MessageList';
import Form from '../Form/Form';

import './App.css';

const App = () => {
    const selectedFriendId = useObservable(() => selectedFriendId$);

    return <div className="App">
        <div className="App-LeftPanel">
            <FriendList />
        </div>
        <div className="App-RightPanel">
            {
                selectedFriendId ?
                    <>
                        <MessageList />
                        <Form />
                    </> :
                    null
            }
        </div>
    </div>;
};

export default App;
