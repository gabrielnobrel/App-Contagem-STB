import React from "react";

import {
  Background,
  Container,
  Logo,
  ContainerLogin,
  Box,
  BoxText,
  AreaInput,
  BoxInput,
  Input,
  SubmitButton,
  SubmitText,
} from "./styles";

export default function SignIn() {
  return (
    <Background behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
      <Container>
        <Logo />
      </Container>

      <BoxText>Login</BoxText>

      <ContainerLogin>
        <Box>
          <AreaInput>
            <BoxInput>
              <Input placeholder="Nome Completo" autoCorrect={false} />
            </BoxInput>

            <BoxInput>
              <Input placeholder="Senha" autoCorrect={false} />
            </BoxInput>

            <SubmitButton>
              <SubmitText>Entrar</SubmitText>
            </SubmitButton>
          </AreaInput>
        </Box>
      </ContainerLogin>
    </Background>
  );
}
