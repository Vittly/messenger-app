import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

test('renders textarea within Form', () => {
    render(<Form onSend={jest.fn()} />);
    expect(document.getElementsByTagName('textarea')).toHaveLength(1);
});

test('submits text by Form button click', () => {
    const onSend = jest.fn();

    render(<Form onSend={onSend} />);

    const textarea = document.getElementsByTagName('textarea')[0];
    textarea.value = 'test';

    const button = screen.getByText('Send');
    fireEvent.click(button);

    expect(onSend).toHaveBeenCalledWith('test');
});

test('clears textarea by Form button click', () => {
    render(<Form onSend={jest.fn()} />);

    const textarea = document.getElementsByTagName('textarea')[0];
    textarea.value = 'test';

    const button = screen.getByText('Send');
    fireEvent.click(button);

    expect(textarea.value).toBe('');
});
