import React from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Background,
  Container,
  Logo,
  ContainerLogin,
  Box,
  BoxText,
  TextLogin,
  AreaInput,
  BoxInput,
  Input,
  SubmitButton,
  SubmitText,
  Register,
  RegisterText,
  ScreenRegister,
} from "./styles";

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <Background behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
      <Container>
        <Logo source={require("../../assets/signUpLogo.png")} />
      </Container>

      <ContainerLogin>
        <Box>
          <BoxText>
            <TextLogin>Criar conta</TextLogin>
          </BoxText>

          <AreaInput>
            <BoxInput>
              <Input placeholder="Nome Completo" autoCorrect={false} />
            </BoxInput>

            <BoxInput>
              <Input placeholder="Senha" autoCorrect={false} />
            </BoxInput>

            <SubmitButton>
              <SubmitText>Criar conta</SubmitText>
            </SubmitButton>
          </AreaInput>
        </Box>
      </ContainerLogin>
    </Background>
  );
}
