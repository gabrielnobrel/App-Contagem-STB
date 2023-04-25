import React, { useContext, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

import Header from "../../components/Header";
import { AuthContext } from "../../context/auth";

import {
  Background,
  Container,
  Mensagem,
  Nome,
  Form,
  TextData,
  BoxInput,
  Input,
} from "./styles";

export default function Home() {
  const { user, signOut } = useContext(AuthContext);
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <Background>
      <Header />

      <Container>
        <Mensagem>Olá,</Mensagem>

        <Nome>Gabriel Nobre</Nome>
      </Container>

      <Form>
        <TextData>25 de Abril de 2023</TextData>

        <DropDownPicker
          items={[
            { label: "Opção 1", value: "opcao1" },
            { label: "Opção 2", value: "opcao2" },
            { label: "Opção 3", value: "opcao3" },
          ]}
          defaultValue={selectedValue}
          containerStyle={{ height: 40 }}
          onChangeItem={(item) => setSelectedValue(item.value)}
        />

        <BoxInput>
          <Input placeholder="Turno" autoCorrect={false} />
        </BoxInput>

        <BoxInput>
          <Input
            placeholder="Número do posto de pesquisa"
            autoCorrect={false}
          />
        </BoxInput>

        <BoxInput>
          <Input
            placeholder="Endereço do posto de pesquisa"
            autoCorrect={false}
          />
        </BoxInput>

        <BoxInput>
          <Input placeholder="Sentido" autoCorrect={false} />
        </BoxInput>
      </Form>
    </Background>
  );
}
