import React, { createContext, useContext, useState, ReactNode } from 'react'
import MenuItem from '../models/Menu'

export interface CartItem extends MenuItem {
  quantity: number
}

export interface DeliveryInfo {
  type: 'delivery' | 'pickup'
  address?: {
    street: string
    number: string
    complement?: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
  }
}

export interface PaymentInfo {
  cardNumber: string
  cardName: string
  expiryDate: string
  cvv: string
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  deliveryInfo: DeliveryInfo
  paymentInfo: PaymentInfo
  orderNumber: string
  estimatedTime: string
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: MenuItem) => void
  removeFromCart: (itemId: number) => void
  updateQuantity: (itemId: number, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
  isCartOpen: boolean
  setIsCartOpen: (isOpen: boolean) => void
  deliveryInfo: DeliveryInfo
  setDeliveryInfo: (info: DeliveryInfo) => void
  paymentInfo: PaymentInfo
  setPaymentInfo: (info: PaymentInfo) => void
  currentStep: 'cart' | 'delivery' | 'payment' | 'confirmation'
  setCurrentStep: (
    step: 'cart' | 'delivery' | 'payment' | 'confirmation'
  ) => void
  currentOrder: Order | null
  setCurrentOrder: (order: Order | null) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    type: 'delivery',
  })
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  })
  const [currentStep, setCurrentStep] = useState<
    'cart' | 'delivery' | 'payment' | 'confirmation'
  >('cart')
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null)

  const addToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id)

      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }

      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }

    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(
        item.infos[0].replace('R$ ', '').replace(',', '.')
      )
      return total + price * item.quantity
    }, 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
        isCartOpen,
        setIsCartOpen,
        deliveryInfo,
        setDeliveryInfo,
        paymentInfo,
        setPaymentInfo,
        currentStep,
        setCurrentStep,
        currentOrder,
        setCurrentOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
