import React from 'react'
import logo from '../../assets/images/logo.svg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import {
  Copyright,
  Description,
  FooterContainer,
  FooterContent,
  Logo,
  SocialIcon,
  SocialMedia,
} from './styles'

const SocialIcons = () => (
  <>
    <SocialIcon>
      <FaFacebook size={24} />
    </SocialIcon>
    <SocialIcon>
      <FaInstagram size={24} />
    </SocialIcon>
    <SocialIcon>
      <FaTwitter size={24} />
    </SocialIcon>
  </>
)

const Footer: React.FC = () => {
  const currentYeat = new Date().getFullYear()

  return (
    <FooterContainer>
      <FooterContent>
        <Logo src={logo} alt="Rick Restaurant" />
        <SocialMedia>
          <SocialIcons />
        </SocialMedia>
        <Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Description>
        <Copyright>
          {currentYeat} - &copy; Rick Todos os direitos reservados.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  )
}
export default Footer
