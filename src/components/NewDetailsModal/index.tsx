import { useState, useEffect } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container } from "./styles";
import api from "../../services/api";
import React from "react";


interface CadastroCopa {
  id: string;
  ano: string;
  sede: string;
  campeao: string;
}

interface NewDetailsModelProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewDetailsModel({
  isOpen,
  onRequestClose,
}: NewDetailsModelProps) {
  const [titulos, setTitulos] = useState<CadastroCopa[]>([])

  useEffect(() => {
    api.get('/worldcup').then(response => setTitulos(response.data))
}, [])

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
      <Container>
      <table>
                <thead>
                    <tr>
                        <th>Ano</th>
                        <th>Sede</th>
                        <th>Campeao</th>
                        <th colSpan={2}>Total</th>
                    </tr>
                </thead>

                <tbody>
                    {titulos.map((title, index) =>
                        <tr key={index.toString()}>
                            <td>{title.ano}</td>
                            <td>{title.sede}</td>
                            <td>{title.campeao}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Container>
    </Modal>
  );
}