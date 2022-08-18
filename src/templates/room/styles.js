import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatContainer = styled.div`
  height: 100vh;
  width: 60%;
  border: 1px solid #EEEEEE;
`;

export const RoomName = styled.h1`
  border-bottom: 1px solid #EEEEEE;
  padding: 15px 30px;
  height: 10%;
`;

export const ChatMessages = styled.div`
  height: 80%;
  padding: 20px;
  overflow-y: scroll;
`;

export const ChatFooter = styled.div`
  display: flex;  
  height: 10%;
  width: 100%;
  border-top: 1px solid #EEEEEE;
`;

export const SendMessageButton = styled.button`
  width: 300px;
`;

export const TextArea = styled.textarea`
  width: 60%;
  outline: none;
  border: 1px solid #E0E0E0;
  font-size: 16px;
`;

export const MessageContainer = styled.div`
  width: 70%;
  background-color: #d9e6f2;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Username = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #204060;
  font-size: 18px;
`;

export const Message = styled.p`
  margin: 0;
  padding: 0;
  color: #204060;
  font-size: 17px;
  font-weight: 600px;
`;

export const Button = styled.button`
  width: 20%;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
`;
