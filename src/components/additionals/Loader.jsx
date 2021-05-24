import styled from "styled-components";

const LoaderWrapper = styled.div`
  border: 10px solid var(--color-bg);
  border-top: 10px solid var(--color-blue);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader({ show }) {
  return show ? <LoaderWrapper></LoaderWrapper> : null;
}
