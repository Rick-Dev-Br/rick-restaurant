import styled from 'styled-components'
import { cores } from '../../../styles/GlobalStyles'

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  background: ${cores.branco};
  z-index: 1000;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${cores.cinza};

  h2 {
    margin: 0;
    color: ${cores.rosa};
    font-size: 1.5rem;
  }
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${cores.rosa};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${cores.rosaBotao};
  }
`

export const CartItems = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`

export const CartItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid ${cores.cinza};

  &:last-child {
    border-bottom: none;
  }
`

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
`

export const ItemDetails = styled.div`
  flex: 1;
`

export const ItemName = styled.h4`
  margin: 0 0 4px 0;
  color: ${cores.preto};
  font-size: 14px;
  font-weight: bold;
`

export const ItemPrice = styled.p`
  margin: 0 0 8px 0;
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 14px;
`

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const QuantityButton = styled.button`
  background: ${cores.rosa};
  color: ${cores.branco};
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background: ${cores.rosaBotao};
  }
`

export const Quantity = styled.span`
  font-weight: bold;
  min-width: 20px;
  text-align: center;
  color: ${cores.preto};
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${cores.rosa};
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    color: ${cores.rosaBotao};
  }
`

export const SidebarFooter = styled.div`
  padding: 20px;
  border-top: 1px solid ${cores.cinza};
`

export const TotalPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
  margin-bottom: 16px;
  text-align: center;
`

export const CheckoutButton = styled.button`
  background: ${cores.rosa};
  color: ${cores.branco};
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s ease;

  &:hover {
    background: ${cores.rosaBotao};
  }
`

export const EmptyCart = styled.div`
  text-align: center;
  color: ${cores.preto};
  font-size: 16px;
  padding: 40px 0;
`
export const DeliveryStep = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const StepHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${cores.cinza};
`

export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${cores.rosa};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: ${cores.rosaBotao};
  }
`

export const DeliveryOptions = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${cores.cinza};
`

export const DeliveryOption = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  input[type='radio'] {
    margin-top: 2px;
    accent-color: ${cores.rosa};
  }
`

export const OptionLabel = styled.label`
  flex: 1;
  cursor: pointer;
  font-weight: bold;
  color: ${cores.preto};
`

export const OptionDescription = styled.div`
  font-size: 12px;
  color: ${cores.rosa};
  font-weight: normal;
  margin-top: 4px;
`

export const AddressForm = styled.div`
  padding: 20px;
  flex: 1;
`

export const FormGroup = styled.div`
  margin-bottom: 16px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  color: ${cores.preto};
  font-size: 14px;
`

export const Required = styled.span`
  color: #e74c3c;
`

export const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 12px;
  border: 2px solid ${(props) => (props.error ? '#e74c3c' : cores.cinza)};
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${cores.rosa};
  }

  &::placeholder {
    color: ${cores.cinza};
  }
`

export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`

export const StepIndicator = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`

export const Step = styled.div<{ active?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => (props.active ? cores.rosa : cores.cinza)};
  color: ${cores.branco};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`
export const PaymentStep = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const PaymentForm = styled.div`
  padding: 20px;
  flex: 1;
`

export const CardInput = styled(Input)`
  font-family: 'Courier New', monospace;
  letter-spacing: 1px;
`

export const HalfInput = styled(Input)`
  width: 100%;
`

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`

export const ConfirmationStep = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const SuccessMessage = styled.div`
  text-align: center;
  padding: 40px 20px;
  border-bottom: 1px solid ${cores.cinza};

  h3 {
    color: #27ae60;
    margin: 16px 0 8px 0;
    font-size: 1.5rem;
  }

  p {
    color: ${cores.preto};
    margin: 0;
    font-size: 14px;
  }
`

export const OrderDetails = styled.div`
  padding: 20px;
  flex: 1;
`

export const OrderItem = styled.div<{ total?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: ${(props) => (props.total ? '2px' : '1px')} solid
    ${cores.cinza};
  font-weight: ${(props) => (props.total ? 'bold' : 'normal')};
  color: ${(props) => (props.total ? cores.rosa : cores.preto)};

  &:last-child {
    border-bottom: none;
  }
`

export const OrderInfo = styled.div`
  background: ${cores.cinza};
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
  font-size: 14px;
  line-height: 1.5;

  strong {
    color: ${cores.rosa};
  }
`

export const OrderNumber = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
  margin-bottom: 16px;
`

export const OrderSummary = styled.div`
  margin-top: 20px;

  h4 {
    color: ${cores.rosa};
    margin-bottom: 12px;
    font-size: 16px;
  }
`

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const EditButton = styled.button`
  background: ${cores.branco};
  color: ${cores.rosa};
  border: 2px solid ${cores.rosa};
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: ${cores.rosa};
    color: ${cores.branco};
  }
`

export const ContinueButton = styled.button`
  background: ${cores.rosa};
  color: ${cores.branco};
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s ease;

  &:hover {
    background: ${cores.rosaBotao};
  }
`
