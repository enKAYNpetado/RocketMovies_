import { Header } from "../../components/Header"
import { Container, Content, NewNote } from "./styles"
import { FiPlus } from "react-icons/fi"
//import { Section } from "../../components/Section"
import { Movie } from "../../components/Movie"

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <div>
          <h1>Meus filmes</h1>
          <NewNote to="/new">
            <FiPlus />
            Adicionar filme
          </NewNote>
        </div>
        <Movie
          data={{
            title: "Interstellar",
            description:
              "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper...",
            tags: [
              {
                id: "1",
                name: "Ficção Cientifíca",
              },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" },
            ],
          }}
        />
      </Content>
    </Container>
  )
}
