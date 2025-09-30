/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { useCart } from '../../contexts/CartContext'
import {
  FaTimes,
  FaPlus,
  FaMinus,
  FaTrash,
  FaArrowLeft,
  FaCheck,
  FaCreditCard,
  FaEdit,
} from 'react-icons/fa'
import {
  SidebarContainer,
  SidebarOverlay,
  SidebarContent,
  SidebarHeader,
  CloseButton,
  CartItems,
  CartItem,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemPrice,
  QuantityControls,
  QuantityButton,
  Quantity,
  RemoveButton,
  SidebarFooter,
  TotalPrice,
  CheckoutButton,
  EmptyCart,
  DeliveryStep,
  StepHeader,
  BackButton,
  DeliveryOptions,
  DeliveryOption,
  OptionLabel,
  OptionDescription,
  AddressForm,
  FormGroup,
  Input,
  Label,
  Required,
  ErrorMessage,
  StepIndicator,
  Step,
  PaymentStep,
  CardInput,
  HalfInput,
  InputGroup,
  ConfirmationStep,
  SuccessMessage,
  OrderDetails,
  OrderItem,
  OrderInfo,
  OrderNumber,
  OrderSummary,
  ActionButtons,
  EditButton,
  ContinueButton,
  PaymentFormContainer,
} from './styles'

const CartSidebar: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
    deliveryInfo,
    setDeliveryInfo,
    paymentInfo,
    setPaymentInfo,
    currentStep,
    setCurrentStep,
    currentOrder,
    setCurrentOrder,
  } = useCart()

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [paymentErrors, setPaymentErrors] = useState<Record<string, string>>({})

  const formatPrice = (priceStr: string) => {
    return parseFloat(priceStr.replace('R$ ', '').replace(',', '.'))
  }

  const handleCheckout = () => {
    setCurrentStep('delivery')
  }

  const handleBackToCart = () => {
    setCurrentStep('cart')
  }

  const handleBackToDelivery = () => {
    setCurrentStep('delivery')
  }

  const handleDeliveryTypeChange = (type: 'delivery' | 'pickup') => {
    setDeliveryInfo({ ...deliveryInfo, type })
    setFormErrors({})
  }

  const handleAddressChange = (field: string, value: string) => {
    const newAddress = { ...deliveryInfo.address, [field]: value }
    setDeliveryInfo({
      ...deliveryInfo,
      address: newAddress as any,
    })

    if (formErrors[field]) {
      setFormErrors({ ...formErrors, [field]: '' })
    }
  }

  const handlePaymentChange = (field: string, value: string) => {
    setPaymentInfo({
      ...paymentInfo,
      [field]: value,
    })

    if (paymentErrors[field]) {
      setPaymentErrors({ ...paymentErrors, [field]: '' })
    }
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ''
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    return parts.length ? parts.join(' ') : value
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    if (v.length >= 2) {
      return v.substring(0, 2) + (v.length > 2 ? '/' + v.substring(2, 4) : '')
    }
    return value
  }

  const validateDeliveryForm = () => {
    const errors: Record<string, string> = {}

    if (deliveryInfo.type === 'delivery') {
      if (!deliveryInfo.address?.street) errors.street = 'Rua é obrigatória'
      if (!deliveryInfo.address?.number) errors.number = 'Número é obrigatório'
      if (!deliveryInfo.address?.neighborhood)
        errors.neighborhood = 'Bairro é obrigatório'
      if (!deliveryInfo.address?.city) errors.city = 'Cidade é obrigatória'
      if (!deliveryInfo.address?.state) errors.state = 'Estado é obrigatório'
      if (!deliveryInfo.address?.zipCode) errors.zipCode = 'CEP é obrigatório'

      if (
        deliveryInfo.address?.zipCode &&
        !/^\d{5}-?\d{3}$/.test(deliveryInfo.address.zipCode)
      ) {
        errors.zipCode = 'CEP inválido'
      }
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validatePaymentForm = () => {
    const errors: Record<string, string> = {}

    if (
      !paymentInfo.cardNumber ||
      paymentInfo.cardNumber.replace(/\s/g, '').length !== 16
    ) {
      errors.cardNumber = 'Número do cartão inválido'
    }
    if (!paymentInfo.cardName) errors.cardName = 'Nome no cartão é obrigatório'
    if (
      !paymentInfo.expiryDate ||
      !/^\d{2}\/\d{2}$/.test(paymentInfo.expiryDate)
    ) {
      errors.expiryDate = 'Data de validade inválida'
    }
    if (!paymentInfo.cvv || paymentInfo.cvv.length !== 3) {
      errors.cvv = 'CVV inválido'
    }

    setPaymentErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleContinueToPayment = () => {
    if (validateDeliveryForm()) {
      setCurrentStep('payment')
    }
  }

  const handlePlaceOrder = () => {
    if (validatePaymentForm()) {
      const order: any = {
        id: Math.random().toString(36).substr(2, 9),
        items: [...cartItems],
        total: getTotalPrice(),
        deliveryInfo: { ...deliveryInfo },
        paymentInfo: { ...paymentInfo },
        orderNumber: `#${Math.floor(100000 + Math.random() * 900000)}`,
        estimatedTime: '30-40 min',
      }

      setCurrentOrder(order)
      setCurrentStep('confirmation')
      clearCart()
    }
  }

  const handleEditOrder = () => {
    setCurrentStep('cart')
    setIsCartOpen(true)
  }

  const handleCloseSidebar = () => {
    setIsCartOpen(false)
    if (currentStep === 'confirmation') {
      setCurrentStep('cart')
      setCurrentOrder(null)
    }
  }

  const generateStepTitle = () => {
    switch (currentStep) {
      case 'cart':
        return 'Meu Carrinho'
      case 'delivery':
        return 'Entrega'
      case 'payment':
        return 'Pagamento'
      case 'confirmation':
        return 'Pedido Confirmado!'
      default:
        return 'Meu Carrinho'
    }
  }

  if (!isCartOpen) return null

  return (
    <>
      <SidebarOverlay onClick={handleCloseSidebar} />
      <SidebarContainer>
        <SidebarContent>
          <SidebarHeader>
            {currentStep !== 'confirmation' && (
              <StepIndicator>
                <Step active={currentStep === 'cart'}>1</Step>
                <Step active={currentStep === 'delivery'}>2</Step>
                <Step active={currentStep === 'payment'}>3</Step>
              </StepIndicator>
            )}
            <h2>{generateStepTitle()}</h2>
            <CloseButton onClick={handleCloseSidebar}>
              <FaTimes size={20} />
            </CloseButton>
          </SidebarHeader>

          {currentStep === 'cart' && (
            <>
              <CartItems>
                {cartItems.length === 0 ? (
                  <EmptyCart>Seu carrinho está vazio</EmptyCart>
                ) : (
                  cartItems.map((item) => (
                    <CartItem key={item.id}>
                      <ItemImage src={item.image} alt={item.title} />
                      <ItemDetails>
                        <ItemName>{item.title}</ItemName>
                        <ItemPrice>
                          R$ {formatPrice(item.infos[0]).toFixed(2)}
                        </ItemPrice>
                        <QuantityControls>
                          <QuantityButton
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <FaMinus size={12} />
                          </QuantityButton>
                          <Quantity>{item.quantity}</Quantity>
                          <QuantityButton
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <FaPlus size={12} />
                          </QuantityButton>
                        </QuantityControls>
                      </ItemDetails>
                      <RemoveButton onClick={() => removeFromCart(item.id)}>
                        <FaTrash size={16} />
                      </RemoveButton>
                    </CartItem>
                  ))
                )}
              </CartItems>

              {cartItems.length > 0 && (
                <SidebarFooter>
                  <TotalPrice>
                    Total: R$ {getTotalPrice().toFixed(2)}
                  </TotalPrice>
                  <CheckoutButton onClick={handleCheckout}>
                    Continuar para Entrega
                  </CheckoutButton>
                </SidebarFooter>
              )}
            </>
          )}

          {currentStep === 'delivery' && (
            <DeliveryStep>
              <StepHeader>
                <BackButton onClick={handleBackToCart}>
                  <FaArrowLeft size={16} />
                  Voltar
                </BackButton>
              </StepHeader>

              <DeliveryOptions>
                <DeliveryOption>
                  <input
                    type="radio"
                    id="delivery"
                    name="deliveryType"
                    checked={deliveryInfo.type === 'delivery'}
                    onChange={() => handleDeliveryTypeChange('delivery')}
                  />
                  <OptionLabel htmlFor="delivery">
                    Entrega
                    <OptionDescription>
                      Receba seu pedido em casa
                    </OptionDescription>
                  </OptionLabel>
                </DeliveryOption>

                <DeliveryOption>
                  <input
                    type="radio"
                    id="pickup"
                    name="deliveryType"
                    checked={deliveryInfo.type === 'pickup'}
                    onChange={() => handleDeliveryTypeChange('pickup')}
                  />
                  <OptionLabel htmlFor="pickup">
                    Retirar na Loja
                    <OptionDescription>
                      Busque seu pedido no restaurante
                    </OptionDescription>
                  </OptionLabel>
                </DeliveryOption>
              </DeliveryOptions>

              {deliveryInfo.type === 'delivery' && (
                <AddressForm>
                  <FormGroup>
                    <Label htmlFor="street">
                      Rua <Required>*</Required>
                    </Label>
                    <Input
                      type="text"
                      id="street"
                      value={deliveryInfo.address?.street || ''}
                      onChange={(e) =>
                        handleAddressChange('street', e.target.value)
                      }
                      error={!!formErrors.street}
                    />
                    {formErrors.street && (
                      <ErrorMessage>{formErrors.street}</ErrorMessage>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="number">
                      Número <Required>*</Required>
                    </Label>
                    <Input
                      type="text"
                      id="number"
                      value={deliveryInfo.address?.number || ''}
                      onChange={(e) =>
                        handleAddressChange('number', e.target.value)
                      }
                      error={!!formErrors.number}
                    />
                    {formErrors.number && (
                      <ErrorMessage>{formErrors.number}</ErrorMessage>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="complement">Complemento</Label>
                    <Input
                      type="text"
                      id="complement"
                      value={deliveryInfo.address?.complement || ''}
                      onChange={(e) =>
                        handleAddressChange('complement', e.target.value)
                      }
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="neighborhood">
                      Bairro <Required>*</Required>
                    </Label>
                    <Input
                      type="text"
                      id="neighborhood"
                      value={deliveryInfo.address?.neighborhood || ''}
                      onChange={(e) =>
                        handleAddressChange('neighborhood', e.target.value)
                      }
                      error={!!formErrors.neighborhood}
                    />
                    {formErrors.neighborhood && (
                      <ErrorMessage>{formErrors.neighborhood}</ErrorMessage>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="city">
                      Cidade <Required>*</Required>
                    </Label>
                    <Input
                      type="text"
                      id="city"
                      value={deliveryInfo.address?.city || ''}
                      onChange={(e) =>
                        handleAddressChange('city', e.target.value)
                      }
                      error={!!formErrors.city}
                    />
                    {formErrors.city && (
                      <ErrorMessage>{formErrors.city}</ErrorMessage>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="state">
                      Estado <Required>*</Required>
                    </Label>
                    <Input
                      type="text"
                      id="state"
                      value={deliveryInfo.address?.state || ''}
                      onChange={(e) =>
                        handleAddressChange('state', e.target.value)
                      }
                      error={!!formErrors.state}
                    />
                    {formErrors.state && (
                      <ErrorMessage>{formErrors.state}</ErrorMessage>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="zipCode">
                      CEP <Required>*</Required>
                    </Label>
                    <Input
                      type="text"
                      id="zipCode"
                      value={deliveryInfo.address?.zipCode || ''}
                      onChange={(e) =>
                        handleAddressChange('zipCode', e.target.value)
                      }
                      placeholder="00000-000"
                      error={!!formErrors.zipCode}
                    />
                    {formErrors.zipCode && (
                      <ErrorMessage>{formErrors.zipCode}</ErrorMessage>
                    )}
                  </FormGroup>
                </AddressForm>
              )}

              <SidebarFooter>
                <TotalPrice>Total: R$ {getTotalPrice().toFixed(2)}</TotalPrice>
                <CheckoutButton onClick={handleContinueToPayment}>
                  Continuar para Pagamento
                </CheckoutButton>
              </SidebarFooter>
            </DeliveryStep>
          )}

          {currentStep === 'payment' && (
            <PaymentStep>
              <StepHeader>
                <BackButton onClick={handleBackToDelivery}>
                  <FaArrowLeft size={16} />
                  Voltar
                </BackButton>
              </StepHeader>
              <PaymentFormContainer>
                {' '}
                {/* ← Use o novo container aqui */}
                <FormGroup>
                  <Label htmlFor="cardNumber">
                    Número do Cartão <Required>*</Required>
                  </Label>
                  <CardInput
                    type="text"
                    id="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={(e: { target: { value: string } }) =>
                      handlePaymentChange(
                        'cardNumber',
                        formatCardNumber(e.target.value)
                      )
                    }
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                    error={!!paymentErrors.cardNumber}
                  />
                  {paymentErrors.cardNumber && (
                    <ErrorMessage>{paymentErrors.cardNumber}</ErrorMessage>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="cardName">
                    Nome no Cartão <Required>*</Required>
                  </Label>
                  <Input
                    type="text"
                    id="cardName"
                    value={paymentInfo.cardName}
                    onChange={(e) =>
                      handlePaymentChange('cardName', e.target.value)
                    }
                    placeholder="JOÃO M SILVA"
                    error={!!paymentErrors.cardName}
                  />
                  {paymentErrors.cardName && (
                    <ErrorMessage>{paymentErrors.cardName}</ErrorMessage>
                  )}
                </FormGroup>
                <InputGroup>
                  <FormGroup>
                    <Label htmlFor="expiryDate">
                      Validade <Required>*</Required>
                    </Label>
                    <HalfInput
                      type="text"
                      id="expiryDate"
                      value={paymentInfo.expiryDate}
                      onChange={(e: { target: { value: string } }) =>
                        handlePaymentChange(
                          'expiryDate',
                          formatExpiryDate(e.target.value)
                        )
                      }
                      placeholder="MM/AA"
                      maxLength={5}
                      error={!!paymentErrors.expiryDate}
                    />
                    {paymentErrors.expiryDate && (
                      <ErrorMessage>{paymentErrors.expiryDate}</ErrorMessage>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="cvv">
                      CVV <Required>*</Required>
                    </Label>
                    <HalfInput
                      type="text"
                      id="cvv"
                      value={paymentInfo.cvv}
                      onChange={(e: { target: { value: string } }) =>
                        handlePaymentChange(
                          'cvv',
                          e.target.value.replace(/\D/g, '')
                        )
                      }
                      placeholder="000"
                      maxLength={3}
                      error={!!paymentErrors.cvv}
                    />
                    {paymentErrors.cvv && (
                      <ErrorMessage>{paymentErrors.cvv}</ErrorMessage>
                    )}
                  </FormGroup>
                </InputGroup>
              </PaymentFormContainer>
              <SidebarFooter>
                <TotalPrice>Total: R$ {getTotalPrice().toFixed(2)}</TotalPrice>
                <CheckoutButton onClick={handlePlaceOrder} $fullWidth>
                  <FaCreditCard size={16} />
                  Finalizar Pedido
                </CheckoutButton>
              </SidebarFooter>
            </PaymentStep>
          )}

          {currentStep === 'confirmation' && currentOrder && (
            <ConfirmationStep>
              <SuccessMessage>
                <FaCheck size={48} color="#27ae60" />
                <h3>Pedido realizado com sucesso!</h3>
                <p>
                  Seu pedido está sendo preparado e em breve estará a caminho.
                </p>
              </SuccessMessage>

              <OrderDetails>
                <OrderNumber>
                  Número do Pedido: {currentOrder.orderNumber}
                </OrderNumber>

                <OrderInfo>
                  <strong>Previsão de entrega:</strong>{' '}
                  {currentOrder.estimatedTime}
                  <br />
                  <strong>Forma de entrega:</strong>{' '}
                  {currentOrder.deliveryInfo.type === 'delivery'
                    ? 'Entrega'
                    : 'Retirada na loja'}
                  {currentOrder.deliveryInfo.type === 'delivery' &&
                    currentOrder.deliveryInfo.address && (
                      <>
                        <br />
                        <strong>Endereço:</strong>{' '}
                        {currentOrder.deliveryInfo.address.street},{' '}
                        {currentOrder.deliveryInfo.address.number}
                        {currentOrder.deliveryInfo.address.complement &&
                          `, ${currentOrder.deliveryInfo.address.complement}`}
                        <br />
                        <strong>Bairro:</strong>{' '}
                        {currentOrder.deliveryInfo.address.neighborhood}
                        <br />
                        <strong>Cidade:</strong>{' '}
                        {currentOrder.deliveryInfo.address.city} -{' '}
                        {currentOrder.deliveryInfo.address.state}
                      </>
                    )}
                </OrderInfo>

                <OrderSummary>
                  <h4>Resumo do Pedido:</h4>
                  {currentOrder.items.map((item) => (
                    <OrderItem key={item.id}>
                      <span>
                        {item.quantity}x {item.title}
                      </span>
                      <span>
                        R${' '}
                        {(formatPrice(item.infos[0]) * item.quantity).toFixed(
                          2
                        )}
                      </span>
                    </OrderItem>
                  ))}
                  <OrderItem total>
                    <strong>Total</strong>
                    <strong>R$ {currentOrder.total.toFixed(2)}</strong>
                  </OrderItem>
                </OrderSummary>
              </OrderDetails>

              <SidebarFooter>
                <ActionButtons>
                  <EditButton onClick={handleEditOrder}>
                    <FaEdit size={16} />
                    Fazer Novo Pedido
                  </EditButton>
                  <ContinueButton onClick={handleCloseSidebar}>
                    Continuar Navegando
                  </ContinueButton>
                </ActionButtons>
              </SidebarFooter>
            </ConfirmationStep>
          )}
        </SidebarContent>
      </SidebarContainer>
    </>
  )
}

export default CartSidebar
