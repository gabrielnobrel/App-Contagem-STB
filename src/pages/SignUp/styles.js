import styled from "styled-components";

export const Background = styled.View`
  flex: 1;
  background-color: #f3f3f3;
`;

export const Container = styled.View`
  flex: 1;
`;

export const Logo = styled.Image`
  position: absolute;
  height: 270px;
  width: 270px;

  top: -12px;
  left: 50px;
`;

export const ContainerLogin = styled.View`
  flex: 2.1;
  align-items: center;
  justify-content: flex-end;
`;

export const Box = styled.View`
  height: 525px;
  width: 100%;
  background-color: #003348;
  border-top-right-radius: 52px;
  border-top-left-radius: 52px;

  align-items: center;
  justify-content: center;
`;

export const BoxText = styled.View`
  width: 100%;
  position: absolute;
  top: 32px;
`;

export const TextLogin = styled.Text`
  font-size: 35px;
  padding-left: 43px;
  color: #ffffff;
  font-weight: 700;
`;

export const AreaInput = styled.View`
  height: auto;
  width: 100%;
  padding: 0px 43px;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

export const BoxInput = styled.View`
  height: 68px;
  width: 100%;
  margin-bottom: 24px;
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

  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`;
