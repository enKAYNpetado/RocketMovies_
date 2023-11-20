import { Link } from "react-router-dom"

import { Textarea } from "../../components/Textarea"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { FiArrowLeft } from "react-icons/fi"

import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { Container, Form, Button2 } from "./styles"
import { useState } from "react"

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState(0)

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag("")
  }

   function handleRemoveTag(deleted) {
     setTags((prevState) => prevState.filter((tag) => tag !== deleted))
   }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título da nota")
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      )
    }

    await api.post("/notes", {
      title,
      description,
      rating,
      tags,
    })

    alert("Nota criada com sucesso!")
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <div>
              <Link onClick={handleBack}>
                <FiArrowLeft />
                Voltar
              </Link>
              <h1>Novo filme</h1>
            </div>
          </header>

          <div>
            <Input
              placeholder="Título"
              class="first"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              class="second"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <h2>Marcadores</h2>
          <Section>
            <div className="tags">
              {tags.map((tag, index) => (
                <MovieItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <MovieItem
                isNew
                placeholder="Novo marcador"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <div>
            <Button2>Excluir filme</Button2>
            <Button title="Salvar alterações" onClick={handleNewNote} />
          </div>
        </Form>
      </main>
    </Container>
  )
}
