import React, { useContext, useState } from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
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

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
      <Container>
        <Logo source={require("../../assets/signInLogo.png")} />
      </Container>

      <ContainerLogin>
        <Box>
          <BoxText>
            <TextLogin>Login</TextLogin>
          </BoxText>

          <AreaInput>
            <BoxInput>
              <Input
                placeholder="Nome Completo"
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

            <SubmitButton onPress={handleLogin}>
              <SubmitText>Entrar</SubmitText>
            </SubmitButton>
          </AreaInput>

          <Register>
            <RegisterText>Novo por aqui?</RegisterText>
            <ScreenRegister onPress={() => navigation.navigate("SignUp")}>
              Clique Aqui
            </ScreenRegister>
          </Register>
        </Box>
      </ContainerLogin>
    </Background>
  );
}
