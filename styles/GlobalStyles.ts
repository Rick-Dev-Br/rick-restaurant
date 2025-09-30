import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  rosaBotao: '#8C3B3B',
  branco: '#FFF8F6',
  preto: '#000',
  cinza: '#cccc',
  rosaForte: '#F2B6B6',
  textosP: '#4B3A39',
  textosS: '#D9C7C7',
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    padding-top: 160px;

    @media (max-width: 768px) {
      padding-top: 120px;
    }

    @media (max-width: 480px) {
      padding-top: 100px;
    }
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;

    @media (max-width: 768px) {
      padding: 0 12px;
    }
  }
`
