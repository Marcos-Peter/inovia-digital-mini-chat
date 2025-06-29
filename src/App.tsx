import { ChatArea } from '@components/chat-area';
import { Layout } from '@components/layout';
import { Sidebar } from '@components/sidebar';

function App() {
    return (
        <Layout>
            <Sidebar />
            <ChatArea />
        </Layout>
    );
}

export default App;
