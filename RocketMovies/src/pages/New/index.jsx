import { Link } from "react-router-dom"

import { Textarea } from "../../components/Textarea"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { FiArrowLeft } from "react-icons/fi"

import { Container, Form, Button2 } from "./styles"

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <div>
              <Link to="/">
                <FiArrowLeft />
                Voltar
              </Link>
              <h1>Novo filme</h1>
            </div>
          </header>

          <div>
            <Input placeholder="Título" class="first" />
            <Input placeholder="Sua nota (de 0 a 5)" class="second" />
          </div>
          <Textarea placeholder="Observações" />

          <h2>Marcadores</h2>
          <Section>
            <div className="tags">
              <MovieItem value="react" />
              <MovieItem isNew placeholder="Novo marcador" />
            </div>
          </Section>
          <div>
            <Button2>Excluir filme</Button2>
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}
