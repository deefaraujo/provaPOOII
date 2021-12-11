import { useState, FormEvent, useEffect } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container } from "./styles";
import api from "../../services/api";
import React from "react";

interface NewEventModelProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewEventModel({
  isOpen,
  onRequestClose,
}: NewEventModelProps) {
  
  const [ano, setAno] = useState('')
  const [sede, setSede] = useState('')
  const [campeao, setCampeao] = useState('')

  async function handleCreateNewEvent(event: FormEvent) {
    event.preventDefault();
    const data = {
      ano,
      sede,
      campeao
    };

    await api.post("/worldcup", data);

    setAno("");
    setSede("");
    setCampeao("");

    alert("Cadastro realizado com sucesso");

  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewEvent}>
        <h2>Novo Evento</h2>

        <input
          type='text' 
          placeholder='Ano' 
          value={ano}
          onChange={(worldcup) => setAno(worldcup.target.value)}
        />

        <input
          placeholder="Sede"
          type="text"
          value={sede}
          onChange={(worldcup) => setSede(worldcup.target.value)}
        />

        <input
          placeholder="Campeão"
          type="text"
          value={campeao}
          onChange={(worldcup) => setCampeao(worldcup.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}