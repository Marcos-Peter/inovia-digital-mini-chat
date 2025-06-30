import { conversations, nextMessageId } from './api-utils';
import type { Message } from './types';

export const sendMessage = (conversationId: number, msg: Omit<Message, 'id'>): Promise<Message> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const conversation = conversations.find((c) => c.id === conversationId);
            if (!conversation) throw new Error('Conversa não encontrada');
            const newMsg: Message = { ...msg, id: nextMessageId[conversationId]++ };
            conversation.messages.push(newMsg);
            resolve(newMsg);
        }, 300);
    });
};
