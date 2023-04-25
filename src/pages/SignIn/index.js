import React, { useContext, useState } from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/auth";

import {
  Background,
  ContainerBackground,
  Container,
  Logo,
  ContainerLogin,
  BoxText,
  TextLogin,
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
    <Background>
      <ContainerBackground
        behavior={Platform.OS === "ios" ? "padding" : ""}
        enabled
      >
        <Logo source={require("../../assets/signInLogo.png")} />

        <ContainerLogin>
          <BoxText>
            <TextLogin>Login</TextLogin>
          </BoxText>

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

          <SubmitButton onPress={handleLogin}>
            <SubmitText>Entrar</SubmitText>
          </SubmitButton>

          <Register>
            <RegisterText>Novo por aqui?</RegisterText>
            <ScreenRegister onPress={() => navigation.navigate("SignUp")}>
              Cadastre-se!
            </ScreenRegister>
          </Register>
        </ContainerLogin>
      </ContainerBackground>
    </Background>
  );
}
