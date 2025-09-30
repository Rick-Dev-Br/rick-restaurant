import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import { HomeContainer, Button } from './styles'

const Home = () => (
  <>
    <Header />
    <HomeContainer>
      <div className="container">
        <h1>Bem-vindo ao Rick Restaurant</h1>
        <p>Descubra sabores incríveis e experiências únicas</p>
        <Link to="./cardapio">
          <Button>Ver Cardápio</Button>
        </Link>
      </div>
    </HomeContainer>
  </>
)

export default Home
