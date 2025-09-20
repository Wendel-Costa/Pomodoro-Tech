import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      <Container>
        <Heading> Título </Heading>
      </Container>
      <Container>Teste</Container>
      <Container>Teste</Container>
    </>);
}
