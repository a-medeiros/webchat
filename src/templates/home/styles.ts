import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div``;

export const Form = styled.div``;

export const FormTitle = styled.h1`
  margin-bottom: 20px;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 17px;
  padding-bottom: 5px;
`;

export const Input = styled.input`
  border: 1px solid lightgrey;
  border-radius: 7px;
  padding: 7px;
  outline: none;
  font-size: 14px;
`;

export const Select = styled.select`
  border: 1px solid lightgrey;
  border-radius: 7px;
  padding: 7px;
  outline: none;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #003399;
  border: 1px solid #003399;
  color: white;
  font-size: 17px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  padding: 5px 0;
  margin: 0;
  color: #ff0000;
  font-size: 17px;
`;
