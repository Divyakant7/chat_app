import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
	if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
            //userName="java"
			userSecret={localStorage.getItem('password')}
			projectID='f7b8cf64-401b-4c14-85af-27611ab510f5'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
			onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		/>
    );
};

export default App;