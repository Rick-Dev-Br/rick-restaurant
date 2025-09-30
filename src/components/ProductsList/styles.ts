import styled from 'styled-components'
import type { Props } from './index'
import { cores } from '../../../styles/GlobalStyles'

export const Container = styled.section<Omit<Props, 'title' | 'menuItems'>>`
  padding: 80px 0 40px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.rosaForte : cores.textosP};

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: ${cores.rosa};
    text-align: center;
    margin-bottom: 2rem;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`
