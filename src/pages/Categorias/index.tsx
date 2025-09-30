import React from 'react'
import ProductsList from '../../components/ProductsList'
import MenuItem from '../../models/Menu'
import Header from '../../components/Header'
import sushi from '../../assets/images/sushi.png'
import carne from '../../assets/images/carne.jpg'
import frango from '../../assets/images/frango.jpg'
import mousseDeMaracuja from '../../assets/images/mousseDeMaracuja.jpg'
import pudim from '../../assets/images/pudim.jpg'
import boloComSorvete from '../../assets/images/boloComSorvete.png'

const pratosPrincipais: MenuItem[] = [
  {
    id: 1,
    title: 'Sushi Premium',
    description: 'Seleção de sushi fresco com os melhores ingredientes',
    image: sushi,
    rating: 4.7,
    infos: ['R$ 45.00', '30 min'],
    category: 'Japonês',
  },
  {
    id: 2,
    title: 'Frango Premium',
    description:
      'Frango assado, frito ou na grelha com os melhores ingredientes',
    image: frango,
    rating: 4.5,
    infos: ['R$ 30.00', '15 min'],
    category: 'Brasileira',
  },
  {
    id: 3,
    title: 'Carne Premium',
    description: 'Seu churrasco com os melhores ingredientes',
    image: carne,
    rating: 5,
    infos: ['R$ 80.00', '45 min'],
    category: 'Brasileira',
  },
]

const sobremesas: MenuItem[] = [
  {
    id: 4,
    title: 'Mousse de maracujá com chocolate',
    description:
      'Uma combinação cremosa de mousse de maracujá com cobertura de chocolate e lascas crocantes.',
    image: mousseDeMaracuja,
    rating: 5,
    infos: ['R$ 40.00', '12 min'],
    category: 'Doces da casa',
  },
  {
    id: 5,
    title: 'Pudim com calda de goiabada',
    description:
      'Sobremesa leve e delicada, servida com calda de goiabada e farofa crocante.',
    image: pudim,
    rating: 5,
    infos: ['R$ 25.00', '10 min'],
    category: 'Doces da casa',
  },
  {
    id: 6,
    title: 'Brownie com sorvete',
    description:
      'Brownie macio e chocolatudo, servido com bola de sorvete de creme e calda de chocolate.',
    image: boloComSorvete,
    rating: 5,
    infos: ['R$ 60.00', '20 min'],
    category: 'Doces da casa',
  },
]

const Categories: React.FC = () => {
  return (
    <div>
      <Header />
      <ProductsList
        menuItems={pratosPrincipais}
        title="Pratos Principais"
        background="gray"
      />
      <ProductsList
        menuItems={sobremesas}
        title="Sobremesas"
        background="black"
      />
    </div>
  )
}

export default Categories
