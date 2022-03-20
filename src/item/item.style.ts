import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
height: 100%;
border-radius: 10px;
flex-direction: column;
border: 1px solid #000;

img {
  max-height: 250px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

  button {
    border-radius: 0 0 10px 10px;
  }

  div {
    padding: 1rem;
    height: 100%;
  }
`;