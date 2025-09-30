import styled from 'styled-components'
import { cores } from '../../../styles/GlobalStyles'

export const HomeContainer = styled.main`
  padding: 2rem 0;
  min-height: calc(100vh - 160px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${cores.textosP};

  h1 {
    font-size: 3rem;
    color: ${cores.rosa};
    margin-bottom: 1rem;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    color: ${cores.rosa};
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`

export const Button = styled.button`
  background-color: ${cores.rosa};
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: ${cores.rosaBotao};
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`
