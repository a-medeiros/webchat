import { useState } from 'react';
import Link from 'next/link';
import * as Styled from './styles';

export default function Home() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isRoomEmpty, setIsRoomEmpty] = useState(false);

  function handleJoinChat(e) {
    console.log(name, room);
    if (name === '') {
      e.preventDefault();
      setIsNameEmpty(true);
    } else {
      setIsNameEmpty(false);
    }

    if (room === '') {
      e.preventDefault();
      setIsRoomEmpty(true);
    } else {
      setIsRoomEmpty(false);
    }
  }

  return (
    <Styled.Container>
      <Styled.FormContainer>
        <Styled.Form>
          <Styled.FormTitle>Bem-vindo ao WebChat!</Styled.FormTitle>
          <Styled.FieldContainer>
            <Styled.Label htmlFor="name">Nome</Styled.Label>
            <Styled.Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            {isNameEmpty && (
              <>
                <Styled.ErrorMessage>Escolha um nome!</Styled.ErrorMessage>
              </>
            )}
          </Styled.FieldContainer>
          <Styled.FieldContainer>
            <Styled.Label htmlFor="room">Sala</Styled.Label>
            <Styled.Select id="room" value={room} onChange={(e) => setRoom(e.target.value)}>
              <option value="">----</option>
              <option value="Futebol">Futebol</option>
              <option value="Séries">Séries</option>
              <option value="Filmes">Filmes</option>
              <option value="Animes">Animes</option>
              <option value="Fitness">Fitness</option>
              <option value="Música">Música</option>
            </Styled.Select>
            {isRoomEmpty && (
              <>
                <Styled.ErrorMessage>Escolha uma sala!</Styled.ErrorMessage>
              </>
            )}
          </Styled.FieldContainer>
          <Link
            href={{
              pathname: '/room/[room]',
              query: { room, name }
            }}>
            <Styled.Button onClick={handleJoinChat}>Entrar na sala</Styled.Button>
          </Link>
        </Styled.Form>
      </Styled.FormContainer>
    </Styled.Container>
  )
}