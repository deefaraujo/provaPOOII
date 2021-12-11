import React from "react";
import logoImg from "../../assets/dee.png";
import { Container, Content } from "./styles";

// //criar props para receber a função que está no App
interface HeaderProps {
  onOpenNewEventModal: () => void;
  onOpenNewDetailsModal: () => void;
}

export function Header({ onOpenNewEventModal, onOpenNewDetailsModal }: HeaderProps) {
// export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="prova_final_poo" />
        <button type="button" onClick={onOpenNewEventModal}>
          Novo Titulo
        </button>
        <button type="button" onClick={onOpenNewDetailsModal}>
          Detalhes
        </button>
        <button type="button">
          Total
        </button>
      </Content>
    </Container>
  );
}
