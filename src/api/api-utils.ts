import { conversationsMock } from './mocked-api-data';
import type { Conversation } from './types';

export const conversations: Conversation[] = JSON.parse(JSON.stringify(conversationsMock.slice(0, 3)));

export const nextMessageId: Record<number, number> = {};
conversations.forEach((c) => {
    nextMessageId[c.id] = c.messages.length + 1;
});

export const openedConversations = new Set<number>();
