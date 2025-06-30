import type { Conversation } from './types';

export const mariaFullName = 'Maria Clara';
export const joaoFullName = 'João Pedro  Ferreira';
export const anaFullName = 'Ana Paula Souza Martins';
export const carlosFullName = 'Carlos Eduardo Ribeiro Costa';
export const fernandaFullName = 'Fernanda';

export const conversationsMock: Conversation[] = [
    {
        id: 1,
        contact: mariaFullName,
        messages: [
            { id: 1, author: mariaFullName, text: 'Oi, tudo bem?' },
            { id: 2, author: mariaFullName, text: 'Estou bem também!' },
            { id: 3, author: mariaFullName, text: 'Está corrido, mas estou gostando bastante.' },
            { id: 4, author: mariaFullName, text: 'Obrigada! Você é sempre muito prestativo.' },
        ],
        simulatedMessages: [
            { author: mariaFullName, text: 'Você já viu as novidades do React?' },
            { author: mariaFullName, text: 'Hooks são muito legais!' },
            { author: mariaFullName, text: 'Estou estudando TypeScript também.' },
        ],
    },
    {
        id: 2,
        contact: joaoFullName,
        messages: [
            { id: 1, author: joaoFullName, text: 'Olá!' },
            { id: 2, author: joaoFullName, text: 'Tudo certo por aqui.' },
            { id: 3, author: joaoFullName, text: 'Ainda não, mas estou quase lá.' },
            { id: 4, author: joaoFullName, text: 'Valeu! Vou te chamar sim.' },
        ],
        simulatedMessages: [
            { author: joaoFullName, text: 'React é top demais!' },
            { author: joaoFullName, text: 'Você já usou TypeScript?' },
            { author: joaoFullName, text: 'Estou pensando em aprender Redux.' },
        ],
    },
    {
        id: 3,
        contact: anaFullName,
        messages: [
            { id: 1, author: anaFullName, text: 'Oi, tudo bem?' },
            { id: 2, author: anaFullName, text: 'Estou animada para aprender React!' },
            { id: 3, author: anaFullName, text: 'Já comecei a estudar componentes.' },
            { id: 4, author: anaFullName, text: 'Obrigada! Você explica muito bem.' },
        ],
        simulatedMessages: [
            { author: anaFullName, text: 'Que legal esse chat!' },
            { author: anaFullName, text: 'Quero aprender mais sobre hooks.' },
            { author: anaFullName, text: 'Você recomenda algum curso?' },
        ],
    },
    {
        id: 4,
        contact: carlosFullName,
        messages: [
            { id: 1, author: carlosFullName, text: 'Bom dia!' },
            { id: 2, author: carlosFullName, text: 'Você viu o jogo ontem?' },
            { id: 3, author: carlosFullName, text: 'Achei que o time ia perder.' },
            { id: 4, author: carlosFullName, text: 'Vamos marcar de assistir juntos na próxima.' },
        ],
        simulatedMessages: [
            { author: carlosFullName, text: 'Já comprou os ingressos?' },
            { author: carlosFullName, text: 'Me avisa se for mesmo.' },
        ],
    },
    {
        id: 5,
        contact: fernandaFullName,
        messages: [
            { id: 1, author: fernandaFullName, text: 'Oi, tudo certo?' },
            { id: 2, author: fernandaFullName, text: 'Tudo ótimo! Vamos marcar um café?' },
            { id: 3, author: fernandaFullName, text: 'Que tal sexta-feira?' },
            { id: 4, author: fernandaFullName, text: 'Até lá!' },
        ],
        simulatedMessages: [
            { author: fernandaFullName, text: 'Não esquece do nosso café!' },
            { author: fernandaFullName, text: 'Vou chegar um pouco mais tarde.' },
        ],
    },
];
