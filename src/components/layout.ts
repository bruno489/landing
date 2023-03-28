import styled from 'styled-components';
import {Layout} from 'antd';

const {Header, Footer} = Layout;

export const HeaderLanding = styled(Header)`
display: flex;
justify-content: space-between;
color: white;
`;

export const FooterLanding = styled(Footer)`
text-align: center !important;
`;
