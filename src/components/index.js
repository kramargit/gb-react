import { Message } from './Message';

const text = 'Per aspera ad astra';

export const Homework = () => {
    return (
        <div>
            <h1>Homework</h1>
            <Message text={text} />
        </div>
    );
};