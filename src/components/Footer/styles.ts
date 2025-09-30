import styled from 'styled-components'
import { cores } from '../../../styles/GlobalStyles'

export const FooterContainer = styled.footer`
  background-color: ${cores.rosaBotao};
  padding: 40px 0;
  margin-top: auto;
`

export const FooterContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 24px;
    padding: 0 12px;
  }
`

export const Logo = styled.img`
  width: 120px;
  height: auto;

  @media (max-width: 768px) {
    width: 100px;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 20px;
  }
`

export const SocialIcon = styled.span`
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const Description = styled.p`
  color: ${cores.branco};
  font-size: 14px;
  line-height: 1.6rem;
  max-width: 600px;
  margin: 0%;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
  }
`

export const Copyright = styled.p`
  color: ${cores.branco};
  font-size: 12px;
  margin: 0;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`
