import { useStateEvents } from '../../state/hooks';
import MessageList from '../MessageList/MessageList';
import Form from '../Form/Form';

const App = () => {
    const [state, events] = useStateEvents();

    return <div className="App">
        <MessageList items={state.messages} />
        <Form onSend={events.onSend} />
    </div>;
};

export default App;
