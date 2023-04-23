import React, { useState, useContext } from "react";
import { Platform } from "react-native";

import { AuthContext } from "../../context/auth";

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
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useContext(AuthContext);

  function handleSignUp() {
    signUp(nome, email, password);
  }

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
              <Input
                placeholder="Nome Completo"
                autoCorrect={false}
                value={nome}
                onChangeText={(text) => setNome(text)}
              />
            </BoxInput>

            <BoxInput>
              <Input
                placeholder="Email"
                autoCorrect={false}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </BoxInput>

            <BoxInput>
              <Input
                placeholder="Senha"
                autoCorrect={false}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </BoxInput>

            <SubmitButton onPress={handleSignUp}>
              <SubmitText>Criar conta</SubmitText>
            </SubmitButton>
          </AreaInput>
        </Box>
      </ContainerLogin>
    </Background>
  );
}
