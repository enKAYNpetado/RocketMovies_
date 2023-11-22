import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  //height: 100vh;
  display: grid;
  grid-template-rows: 6.6rem auto;
  grid-template-areas:
    " header"
    " content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

`

export const Content = styled.div`
  grid-area: content;
  padding: 0 122px;
  overflow-y: auto;
  width: 100%;
  margin: 50px auto;

  > h1 {
    color: #fff;

    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  > div {
    display: flex;
    justify-content: space-between;

    margin-bottom: 40px;

    h1 {
      margin-top: 11px;
    }
  }
`

export const NewNote = styled(Link)`
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 32px;

  svg {
    margin-right: 8px;
  }
`
