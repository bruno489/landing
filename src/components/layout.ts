import styled from 'styled-components'
import {Layout} from 'antd'

const {Header, Footer} = Layout

export const HeaderLanding = styled(Header)`
display: flex;
justify-content: center;
color: white;
padding: 0 15px;

div > .menu{
  width: 300px;
  height: 98%;

  @media (max-width: 600px) {
    display:none;
  }
}

div > .title{
  align-items: center;
  width: 160px;

 @media (max-width: 600px) {
  margin:auto
 }
}
`

export const FooterLanding = styled(Footer)`
text-align: center !important;
`
