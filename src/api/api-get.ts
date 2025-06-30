import { conversations } from './api-utils';
import type { Conversation, Message } from './types';

export const getConversations = (): Promise<Omit<Conversation, 'messages' | 'simulatedMessages'>[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(conversations.map(({ id, contact }) => ({ id, contact })));
        }, 200);
    });
};

export const getMessages = (conversationId: number): Promise<Message[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const conversation = conversations.find((c) => c.id === conversationId);
            resolve(conversation ? [...conversation.messages] : []);
        }, 300);
    });
};
