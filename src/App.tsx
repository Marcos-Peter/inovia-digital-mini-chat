import { ChatArea } from '@components/chat-area';
import { ChatWelcomeScreen } from '@components/chat-welcome-screen';
import { WelcomeNameScreen } from '@components/chat-welcome-screen/welcome-name-screen.component';
import { Layout } from '@components/layout';
import { Sidebar } from '@components/sidebar';
import React, { useState } from 'react';

const App: React.FC = () => {
    const [selectedConversationId, setSelectedConversationId] = useState<number | null>(null);
    const [userName, setUserName] = useState<string>(() => localStorage.getItem('chatUserName') || '');

    if (!userName) {
        return <WelcomeNameScreen onNameSubmit={setUserName} />;
    }

    return (
        <Layout>
            <Sidebar selectedConversationId={selectedConversationId ?? 0} onSelectConversation={setSelectedConversationId} />
            {selectedConversationId ? (
                <ChatArea selectedConversationId={selectedConversationId} onClose={() => setSelectedConversationId(null)} />
            ) : (
                <ChatWelcomeScreen />
            )}
        </Layout>
    );
};

export default App;
