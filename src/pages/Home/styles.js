import styled from "styled-components";

export const Background = styled.View`
  flex: 1;
  background-color: #003348;
`;

export const Container = styled.View`
  margin: 0px 0px 30px 15px;
`;

export const Mensagem = styled.Text`
  font-size: 30px;
  color: #fff;
  font-weight: 700;
`;

export const Nome = styled.Text`
  font-size: 30px;
  color: #fff;
  font-weight: 700;
  background-color: red;
`;

export const Form = styled.View`
  margin-left: 15px;
  margin-right: 15px;
  background-color: red;
  gap: 24px;
`;

export const TextData = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-weight: 700;
`;

export const Lista = styled.DropDownPicker``;

export const BoxInput = styled.View`
  height: 68px;
  /* margin-top: 24px; */
  background-color: #5f9f9e;
  border-radius: 12px;
  justify-content: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255, 255, 255, 0.5)",
  margin: 20,
})`
  color: #ffffff;
  font-size: 16px;
`;
