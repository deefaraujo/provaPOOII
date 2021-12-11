import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import api from '../../services/api'

interface CadastroCopa {
  id: string;
  ano: string;
  sede: string;
  campeao: string;
}

interface HeaderProps {
  onOpenNewDetailsModal: () => void;
}

const Dashboard: React.FC = (onOpenNewDetailsModal) => {
    const [titulos, setTitulos] = useState<CadastroCopa[]>([])

    async function handleDelete(id: string) {
        await api.delete(`/worldcup/${id}`)
        setTitulos(titulos.filter(title => title.id !== id))
    }


    useEffect(() => {
        api.get('/worldcup').then(response => setTitulos(response.data))
    }, [])



    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Ano</th>
                        <th>Sede</th>
                        <th>Campeao</th>
                        <th colSpan={2}>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {titulos.map((title, index) =>
                        <tr key={index.toString()}>
                            <td>{title.ano}</td>
                            <td>{title.sede}</td>
                            <td>{title.campeao}</td>
                            <button id="btn" onClick={() => handleDelete(title.id)}>                               
                                Remove
                            </button>
                        </tr>
                    )}
                </tbody>
            </table>
        </Container>
    )
}

export default Dashboard

