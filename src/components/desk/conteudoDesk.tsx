import {
  Carousel,
  Col,
  Divider,
  Layout,
  Menu,
  Row,
  Timeline,
  Typography,
} from "antd";
import AvatarRosto from "../../../src/images/avatar_face.png";
import AvatarCorpo from "../../../src/images/avatar_corpo.png";
import Image from "next/image";
import { FooterLanding, HeaderLanding } from "../layout";

const { Content } = Layout;
const { Title, Text } = Typography;

export const ConteudoDesk = () => {
  const styleCarousel = {
    margin: "0",
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Layout>
      <HeaderLanding>
        <div style={{ width: "200px", display: "flex" }}>
          <div style={{ width: "50px" }}>
            <Image src={AvatarRosto} />
          </div>
          <div
            style={{
              textAlign: "center",
              width: "110px",
            }}
          >
            <Title
              style={{
                color: "white",
                margin: "0",
                display: "flex",
                justifyContent: "center",
                // border:'1px solid green',
                // alignItems:'center'
              }}
              level={5}
            >
              Bruno Guedes
            </Title>
            <Title
              style={{
                color: "white",
                margin: "0",
                // border:'1px solid green'
              }}
              level={5}
            >
              Developer
            </Title>
          </div>
        </div>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item key={1}>Quem sou</Menu.Item>
          <Menu.Item key={2}>Stack</Menu.Item>
          <Menu.Item key={3}>Experiência</Menu.Item>
        </Menu>
      </HeaderLanding>
      <Content style={{ width: "100%" }}>
        <Divider>Quem sou</Divider>
        <Row
          justify="center"
          align="middle"
          style={{ padding: "10px auto", flex: "1" }}
        >
          <Col style={{ width: "30%" }}>
            <div style={{ height: "50vw", display: "flex", margin: "auto 0" }}>
              <Image src={AvatarCorpo} />
            </div>
          </Col>
          <Col
            style={{ flexDirection: "column", width: "40%", display: "flex" }}
          >
            <div>
              {" "}
              <Title level={3}>Permita que eu me apresente:</Title>
            </div>
            <div>
              <p>
                Olá, me chamo Bruno Guedes e sou desenvolvedor fullstack há mais
                de um ano.
              </p>
              <p>
                Graduando em Direito, autodidata e paixonado pela programação
                com o hábito de aprender todo dia.
              </p>
            </div>
          </Col>
        </Row>
        <Divider>Stack</Divider>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Timeline>
            <Timeline.Item>item 1</Timeline.Item>
            <Timeline.Item>item 2</Timeline.Item>
          </Timeline>
        </div>
      </Content>
      <FooterLanding>
        <Text>Desenvolvido por Bruno Guedes</Text>
      </FooterLanding>
    </Layout>
  );
};
