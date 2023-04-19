import styled from "styled-components";

export const Background = styled.View`
  flex: 1;
  background-color: #f3f3f3;
`;

export const Container = styled.View`
  flex: 1;
  background-color: red;
`;

export const Logo = styled.Image`
  /* height: 367; */
`;

export const ContainerLogin = styled.View`
  flex: 2.1;
  align-items: center;
  justify-content: flex-end;
`;

export const Box = styled.View`
  height: 519;
  width: 100%;
  background-color: #2b5141;
  border-top-right-radius: 52;
  border-top-left-radius: 52;

  align-items: center;
  justify-content: center;
`;

export const AreaInput = styled.View`
  height: 242;
  width: 341;
  justify-content: space-between;
  align-items: center;
`;

export const BoxText = styled.Text``;

export const BoxInput = styled.View`
  height: 68;
  width: 100%;
  background-color: #122d21;
  border-radius: 20;

  justify-content: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255, 255, 255, 0.6)",
  margin: 10,
})`
  color: #ffffff;
  font-size: 16;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #122d21;
  width: 195;
  height: 58;
  border-radius: 20;

  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text`
  color: #ffffff;
  font-size: 20;
  font-weight: 600;
`;
