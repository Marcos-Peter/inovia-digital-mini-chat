export type Message = {
    id: number;
    author: string;
    text: string;
};

export type Conversation = {
    id: number;
    contact: string;
    messages: Message[];
    simulatedMessages: Omit<Message, 'id'>[];
};
