import React from "react";

import {
  Background,
  Container,
  Logo,
  ContainerLogin,
  Box,
  BoxText,
  Text,
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

      <ContainerLogin>
        <Box>
          <BoxText>
            <Text>Login</Text>
          </BoxText>

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
