import styled from 'styled-components'
import {Layout} from 'antd'

const {Header, Footer} = Layout

export const HeaderLanding = styled(Header)`
display: flex;
justify-content: space-between;
color: white;
padding: 0 15px;

.menu{
  width: 300px;
  height: 98%;

  @media (max-width: 600px) {
    display:none;
  }
}

.title{
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
