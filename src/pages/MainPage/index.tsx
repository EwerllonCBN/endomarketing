import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Dashboard } from "../../components/Dashboard";

export function MainPage() {
  return (
    <Container>
      <Header />
      <Dashboard />
    </Container>
  );
}
