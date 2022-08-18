import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import * as Styled from './styles';
import io from 'socket.io-client';

export default function Chat({ name, room }) {
  const socketRef = useRef();
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    socketRef.current = io('http://localhost:8080/');

    socketRef.current.emit('join room', { username: name, room });

    socketRef.current.on('message', (userMessage) => {
      outputMessage(userMessage);
    });

    return () => {
      // impedindo que os eventos ocorram mais de umas vez
      socketRef.current.off('join room');
      socketRef.current.off('message');
    };
  }, []);

  function outputMessage(newMessage) {
    setMessages((oldMessages) => [...oldMessages, newMessage]);
  }

  function sendMessage() {
    socketRef.current.emit('message', { username: name, message: userMessage });
    setUserMessage('');
  }

  function leaveRoom() {
    socketRef.current.disconnect();
    router.push('/');
  }

  return (
    <Styled.Container>
      <Styled.ChatContainer>
        <Styled.RoomName>{room}</Styled.RoomName>
        <Styled.ChatMessages>
          {messages?.map((item) => (
            <Styled.MessageContainer>
              <Styled.Username>{item.username}</Styled.Username>
              <Styled.Message>{item.message}</Styled.Message>
            </Styled.MessageContainer>
          ))}
        </Styled.ChatMessages>
        <Styled.ChatFooter>
          <Styled.Button color="#D50000" onClick={leaveRoom}>Sair</Styled.Button>
          <Styled.TextArea value={userMessage} onChange={(e) => setUserMessage(e.target.value)} />
          <Styled.Button color="#2962FF" onClick={sendMessage}>Enviar</Styled.Button>
        </Styled.ChatFooter>
      </Styled.ChatContainer>
    </Styled.Container>
  )
}