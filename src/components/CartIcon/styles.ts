import styled from 'styled-components'
import { cores } from '../../../styles/GlobalStyles'

export const CartIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: ${cores.rosa};
  color: ${cores.branco};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  z-index: 1001;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  &:hover {
    transform: translateY(-50%) scale(1.1);
    background: ${cores.rosaBotao};
  }
`

export const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: ${cores.branco};
  color: ${cores.rosa};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${cores.rosa};

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    font-size: 10px;
    top: -4px;
    right: -4px;
  }
`
