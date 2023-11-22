import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.header`
  grid-area: header;

  display: flex;
  align-items: center;
  gap: 64px;

  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 42px 123px;
`

export const Brand = styled.div`
  color: #ff859b;
  font-size: 24px;
  font-family: Roboto Slab;

  > h1 {
    margin-top: -16px;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 367px;
  margin-top: -7px;
  margin-right: -30px;

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 14px;
    }

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 14px;
      text-align: right;
    }
  }
`

export const Icon = styled(Link)`
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left: 9px;
  }
`

export const Logout = styled.div`
  span {
    cursor: pointer;
  }
`
