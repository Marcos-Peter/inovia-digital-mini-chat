import { conversations, nextMessageId, openedConversations } from '@api/api-utils';
import { conversationsMock } from '@api/mocked-api-data';
import type { Message } from '@api/types';

export const addNextConversation = (): boolean => {
    const currentIds = conversations.map((conversation) => conversation.id);
    const nextConversation = conversationsMock.find((conversation) => !currentIds.includes(conversation.id));
    if (nextConversation) {
        conversations.push(JSON.parse(JSON.stringify(nextConversation)));
        nextMessageId[nextConversation.id] = nextConversation.messages.length + 1;
        return true;
    }
    return false;
};

export const simulateIncomingMessage = (conversationId: number): Message | null => {
    const conversation = conversations.find((c) => c.id === conversationId);
    if (!conversation || conversation.simulatedMessages.length === 0) return null;
    const msg = { ...conversation.simulatedMessages.shift()!, id: nextMessageId[conversationId]++ };
    conversation.messages.push(msg);
    return msg;
};

export const isContactTyping = (conversationId: number): boolean => {
    const conv = conversations.find((conversation) => conversation.id === conversationId);
    return !!(conv && conv.simulatedMessages.length > 0);
};

export const markConversationOpened = (conversationId: number) => {
    openedConversations.add(conversationId);
};

export const isConversationOpened = (conversationId: number): boolean => {
    return openedConversations.has(conversationId);
};
