import { ChatEngine, ChatFeed } from 'react-chat-engine';
 
// import ChatFeed from './Components/ChatFeed';

import './App.css';

const App = () => {
  return (
      <ChatEngine 
          height='100vh'
          projectID='
          9e7812e1-ded2-43ca-ba12-9a7fea87d2d1'
          userName='Bigwhale'
          userSecret='123456789'
          renderChatFeed={(chatAppProps) => < ChatFeed { ...chatAppProps} />}
      />
  )
}

export default App;