import React, { useRef } from 'react';
import './Form.css';

interface IForm {
    onSend: (text: string) => void;
}

const Form: React.FC<IForm> = props => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const onSubmit = () => {
        if (!textareaRef.current) return;

        props.onSend(textareaRef.current.value);
        textareaRef.current.value = '';
    };

    return <div className="Form">
        <textarea className="Form-Area" ref={textareaRef}></textarea>
        <div className="Form-Submit" onClick={onSubmit}>Send</div>
    </div>;
};

export default React.memo(Form);
