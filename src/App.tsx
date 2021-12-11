import React from "react";
import { useState } from "react";
import  Dashboard  from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewEventModel } from "./components/NewEventModal";
import { NewDetailsModel } from "./components/NewDetailsModal";
import GlobalStyle from './styles/global';

export function App() {

  const [isNewEventModalOpen, setIsNewEventModalOpen] =
  useState(false);

  const [isNewDetailsModalOpen, setIsNewDetailsModalOpen] =
  useState(false);

  function handleOpenNewEventModal() {
    setIsNewEventModalOpen(true);
  }

  function handleOpenDetailsEventModal() {
    setIsNewDetailsModalOpen(true);
  }

  function handleCloseNewEventModal() {
    setIsNewEventModalOpen(false);
  }

  function handleCloseNewDetailsModal() {
    setIsNewDetailsModalOpen(false);
  }

  return (
    <div className="App">
      <Header onOpenNewEventModal={handleOpenNewEventModal} onOpenNewDetailsModal={handleOpenDetailsEventModal} />
      <Dashboard />

      <NewEventModel
        isOpen={isNewEventModalOpen}
        onRequestClose={handleCloseNewEventModal}
      />

      <NewDetailsModel
        isOpen={isNewDetailsModalOpen}
        onRequestClose={handleCloseNewDetailsModal}
      />

    <GlobalStyle />
    </div>
  )
}
