import styled from 'styled-components'
import { cores } from '../../../styles/GlobalStyles'

export const HeaderHome = styled.header`
  background: ${cores.textosS};
  height: auto;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 1.4rem 1rem;
    min-height: 100px;
  }
`

export const HeaderContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`

export const BannerContent = styled.div<{ $hasCart?: boolean }>`
  text-align: center;
  color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: ${(props) => (props.$hasCart ? '70px' : '0')};

  @media (max-width: 768px) {
    padding-right: ${(props) => (props.$hasCart ? '60px' : '0')};
  }

  @media (max-width: 480px) {
    padding-right: ${(props) => (props.$hasCart ? '50px' : '0')};
  }
`

export const LogoContainer = styled.div`
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    margin-bottom: 0.25rem;
  }

  img {
    width: 80px;
    height: auto;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));

    @media (max-width: 768px) {
      width: 60px;
    }
  }

  a {
    text-decoration: none;
  }
`

export const Slogan = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0 0 1rem 0;
  color: ${cores.rosa};
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 0 0.75rem 0;
    br {
      display: none;
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }

    &:hover {
      color: ${cores.rosaBotao};
    }
  }
`
