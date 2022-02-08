import {
  Container,
  Content,
  Title,
  Button,
  ManagementComercial,
} from "./styles";
import { BiWorld } from "react-icons/bi";
import MenuDeleteManagementCard from "../MenuDeleteManagementCard";

export function ManagementCard({ management, removecardManagement }: any) {
  console.log("Gestão: ", management);
  return (
    <Container>
      <h2>Quadro de Gestão à Vista</h2>

      {management.data[0].boards.map((element: any) => (
        <Content>
          <Title>
            <h3>{element.title}</h3>

            <Button>
              <button type="button">
                <BiWorld />
              </button>
              <MenuDeleteManagementCard
                removecardManagement={removecardManagement}
              />
            </Button>
          </Title>

          <ManagementComercial>
            {management.data[0].boards[0].resume_files.map((el: any) => {
              return (
                <img src={el.file} alt="perfil" width="24%" height="60px" />
              );
            })}
          </ManagementComercial>
        </Content>
      ))}
    </Container>
  );
}
