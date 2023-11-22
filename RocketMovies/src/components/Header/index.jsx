import { Container, Logout, Brand, Profile, Icon } from "./styles"
import { Input } from "../Input/index"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header({ ...props }) {
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }
  const { signOut, user } = useAuth()

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input type="search" placeholder="Pesquisar pelo título" {...props} />

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <Logout onClick={handleSignOut}>
            <span>Sair</span>
          </Logout>
        </div>
        <Icon to="/profile">
          <img src={avatarURL} alt={user.name} />
        </Icon>
      </Profile>
    </Container>
  )
}
