import styled from 'styled-components'
import { cores } from '../../../styles/GlobalStyles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.cinza};
  border: 2px solid ${cores.rosa};
  border-radius: 12px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
`

export const AddToCartButton = styled.button`
  background: ${cores.rosa};
  color: ${cores.branco};
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: ${cores.rosaBotao};
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
  display: block;
  margin: 0;
  color: ${cores.rosa};
`

export const Descricao = styled.p`
  font-size: 0.95;
  line-height: 1.6;
  display: block;
  margin-top: 16px;
  color: ${cores.rosa};
  flex-grow: 1;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 1rem;
`
