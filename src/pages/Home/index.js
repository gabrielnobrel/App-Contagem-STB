import React, { useContext } from "react";

import Header from "../../components/Header";
import { AuthContext } from "../../context/auth";

import { Background, Container, Mensagem, Nome } from "./styles";

export default function Home() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <Background>
      <Header />

      <Container>
        <Mensagem>Olá,</Mensagem>

        <Nome>Gabriel Nobre</Nome>
      </Container>
    </Background>
  );
}
