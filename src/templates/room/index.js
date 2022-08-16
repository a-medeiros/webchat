import * as Styled from './styles';
import Button from '../../components/Button';

export default function Chat({ name, room }) {
  return (
    <Styled.Container>
      <Styled.ChatContainer>
        <Styled.RoomName>{room}</Styled.RoomName>
        <Styled.ChatMessages>
          <Styled.MessageContainer>
            <Styled.Username>{name}</Styled.Username>
            <Styled.Message>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Styled.Message>
          </Styled.MessageContainer>
          <Styled.MessageContainer>
            <Styled.Username>{name}</Styled.Username>
            <Styled.Message>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Styled.Message>
          </Styled.MessageContainer>
        </Styled.ChatMessages>
        <Styled.ChatFooter>
          <Button title="Sair" color="#D50000" />
          <Styled.TextArea />
          <Button title="Enviar" color="#2962FF" />
        </Styled.ChatFooter>
      </Styled.ChatContainer>
    </Styled.Container>
  )
}