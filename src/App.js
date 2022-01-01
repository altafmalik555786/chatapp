import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="5e1b5a3a-c7ad-4afc-bdcf-329b09a936cf"
            userName="Altaf"
            userSecret="123456"
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;