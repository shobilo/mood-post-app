import "./app-header.css"
import styled from "styled-components"

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    :hover {
      color: blue;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = () => {
  return (
    <Header as='div'>
      <h1>Basic notes app</h1>
      <h2>5 notes, 0 favorites</h2>
    </Header>
  )
}

export default AppHeader