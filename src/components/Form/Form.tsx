import React, { useRef } from 'react';
import { useObservable } from 'rxjs-hooks';
import { userId$, selectedFriendId$ } from '../../state/observables';
import { onSend } from '../../state/callbacks';
import './Form.css';

const Form: React.FC = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const userId = useObservable(() => userId$);
    const selectedFriendId = useObservable(() => selectedFriendId$);

    const onSubmit = () => {
        if (!textareaRef.current || !userId || !selectedFriendId) return;

        onSend(userId, selectedFriendId, textareaRef.current.value);
        textareaRef.current.value = '';
    };

    return <div className="Form">
        <textarea className="Form-Area" ref={textareaRef}></textarea>
        <div className="Form-Submit" onClick={onSubmit}>Send</div>
    </div>;
};

export default Form;
