import React, { useState, useEffect } from 'react';
import db from './backend/firebase';
import { FormControl, Input } from '@material-ui/core';
import Messages from './components/Messages';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core'
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
     db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
     });
  }, []);

  useEffect(() => {
     setUsername(prompt('Please enter your Username'));
  }, []);

  const sendMessage = e => {
     e.preventDefault();

     db.collection('messages').add({
        message: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
     });
     
     setInput('');
  }

  return (
    <div className="App">
       
       <div className="app__banner">
         <h1>Facebook Messenger Clone</h1>
         <img src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=85.88&h=85.88' alt='Messenger Icon' />
       </div>
       <h2>Welcome {username}</h2>
       
       <form className="app__form">
       <FormControl className="app__formControl">
          <Input className="app__input" placeholder='Enter a message...' value={input} onChange={e => setInput(e.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
       </FormControl>
       </form>
       
       <FlipMove>
          {
            messages.map(({id, message}) => (
              <Messages key={id} username={username} message={message} />
            ))
          }
       </FlipMove>   
    </div>
  );
}

export default App;
