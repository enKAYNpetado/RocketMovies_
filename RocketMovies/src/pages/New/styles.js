import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;

    header a {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  .tags {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }
`
export const Form = styled.form`
  max-width: 1235px;
  margin: 38px auto;

  > div {
    display: flex;
    margin-bottom: 40px;

    gap: 40px;
  }

  > h2 {
    color: #999591;
    font-size: 20px;
    line-height: normal;
    font-style: normal;
    font-weight: 400;
  }
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
export const Button2 = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.PINK};
  margin-right: 40px;

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`
