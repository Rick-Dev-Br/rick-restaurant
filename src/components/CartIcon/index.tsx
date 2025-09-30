import React from 'react'
import { useCart } from '../../contexts/CartContext'
import { FaShoppingCart } from 'react-icons/fa'
import { CartIconContainer, CartCount } from './styles'

const CartIcon: React.FC = () => {
  const { getTotalItems, setIsCartOpen } = useCart()

  return (
    <CartIconContainer onClick={() => setIsCartOpen(true)}>
      <FaShoppingCart size={20} />
      <CartCount>{getTotalItems()}</CartCount>
    </CartIconContainer>
  )
}

export default CartIcon
