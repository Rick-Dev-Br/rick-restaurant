import React from 'react'
import MenuItem from '../../models/Menu'
import Product from '../Product'
import { List, Container } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  menuItems: MenuItem[]
}

const ProductsList: React.FC<Props> = ({ background, title, menuItems }) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Product
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              rating={item.rating}
              infos={item.infos}
              category={item.category}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
