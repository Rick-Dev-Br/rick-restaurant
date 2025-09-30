import {
  HeaderHome,
  HeaderContainer,
  BannerContent,
  LogoContainer,
  Slogan,
  Nav,
} from './styled'
import image from '../../assets/images/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import CartIcon from '../CartIcon'

const Header = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <HeaderHome>
      <HeaderContainer>
        <BannerContent $hasCart={!isHomePage}>
          <LogoContainer>
            <Link to="/">
              <img src={image} alt="Rick Restaurant" />
            </Link>
          </LogoContainer>
          <Slogan>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </Slogan>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/cardapio">Cardápio</Link>
          </Nav>
        </BannerContent>
        {!isHomePage && <CartIcon />}
      </HeaderContainer>
    </HeaderHome>
  )
}

export default Header
