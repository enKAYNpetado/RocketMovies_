import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  a {
    color: ${({ theme }) => theme.COLORS.PINK};
    max-width: 120px;
  }

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 40px 0;
  }

  .exclude {
    position: absolute;
    right: 132px;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
  }
`

export const Content = styled.div`
  max-width: 1240px;
  margin: 0 auto;

  img {
    width: 16px;
    height: 16px;
  }

  div {
    display: flex;
    font-size: 16px;
    gap: 8px;
    margin-top: 24px;

    img {
      border-radius: 50%;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  .stars svg {
    transform: translateY(100%);
  }

  .info svg {
    transform: translateY(20%);
  }

  display: flex;
  flex-direction: column;

  /*> button:first-child {
    align-self: end;
  }*/

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`

export const Section2 = styled.section`
  margin: 28px 0;
  //background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 8px;
  div {
    padding: 16px;
    border-radius: 8px;
  }

  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;
    margin-bottom: 28px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`
