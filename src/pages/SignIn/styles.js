import styled from "styled-components";

export const Background = styled.View`
  flex: 1;
  background-color: #f3f3f3;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  height: 300px;
  width: 390px;
`;

export const ContainerLogin = styled.View`
  height: 100%;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;

  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: #003348;
`;

export const BoxText = styled.View`
  width: 100%;

  margin-top: 32px;
  margin-bottom: 15px;
  justify-content: center;
`;

export const TextLogin = styled.Text`
  font-size: 35px;
  color: #ffffff;
  font-weight: 700;
`;

export const BoxInput = styled.View`
  height: 68px;
  width: 100%;
  margin-top: 24px;
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

export const SubmitButton = styled.TouchableOpacity`
  background-color: #5f9f9e;
  width: 170px;
  height: 58px;
  border-radius: 12px;
  margin-top: 24px;

  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`;

export const Register = styled.View`
  margin-top: 100px;
  width: 100%;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const RegisterText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;

export const ScreenRegister = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: 700;

  margin-left: 10px;
`;
