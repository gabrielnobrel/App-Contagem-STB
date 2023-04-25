import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { Container, ButtonMenu } from "./styles";

export default function Header() {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonMenu onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="menu" color={"#5f9f9e"} size={40} />
      </ButtonMenu>
    </Container>
  );
}
