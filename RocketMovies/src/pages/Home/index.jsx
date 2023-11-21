import { Header } from "../../components/Header"
import { Container, Content, NewNote } from "./styles"
import { FiPlus } from "react-icons/fi"

import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

import { Movie } from "../../components/Movie"

export function Home() {
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleDetails(noteId) {
    navigate(`/details/${noteId}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])
  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />

      <Content>
        <div>
          <h1>Meus filmes</h1>
          <NewNote to="/new">
            <FiPlus />
            Adicionar filme
          </NewNote>
        </div>

        {notes.map((note) => (
          <Movie
            key={String(note.id)}
            data={note}
            onClick={() => handleDetails(note.id)}
          />
        ))}
      </Content>
    </Container>
  )
}
