import React from 'react'
import Tag from '../Tag'
import StarTag from '../Star'
import { useCart } from '../../contexts/CartContext'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  RatingContainer,
  TitleContainer,
  AddToCartButton,
} from './styles'

type Props = {
  id: number
  title: string
  category: string
  description: string
  infos: string[]
  image: string
  rating: number
}

const Product: React.FC<Props> = ({
  id,
  category,
  description,
  infos,
  image,
  title,
  rating,
}) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    const menuItem = {
      id,
      title,
      category,
      description,
      infos,
      image,
      rating,
    }
    addToCart(menuItem)
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <TitleContainer>
        <Titulo>{title}</Titulo>
        <RatingContainer>
          <span>{rating}</span>
          <StarTag />
        </RatingContainer>
      </TitleContainer>
      <Tag>{category}</Tag>
      <Descricao>{description}</Descricao>
      <AddToCartButton onClick={handleAddToCart}>
        Adicionar ao Carrinho
      </AddToCartButton>
    </Card>
  )
}

export default Product
