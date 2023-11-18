import { Container } from "./styles"
import { Tag } from "../Tag"


export function Movie({ data, ...rest }) {
  return (
    <Container {...rest} to="/details/:id">
      <button>
        <h1>{data.title}</h1>

        <p>{data.description}</p>

        {data.tags && (
          <footer>
            {data.tags.map((tag) => (
              <Tag key={tag.id} title={tag.name} />
            ))}
          </footer>
        )}
      </button>
    </Container>
  )
}
