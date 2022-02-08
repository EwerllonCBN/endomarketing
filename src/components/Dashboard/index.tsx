import { Modal } from "@material-ui/core";
import { BiCaretDown, BiPlus } from "react-icons/bi";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {
  Container,
  Text,
  Content,
  SideLeft,
  SideRight,
  NoticeBox,
  ButtonType,
} from "../Dashboard/styles";
import { InformationBox } from "../Form/InformationBox";
import { ManagementCard } from "../ManagementCard";
import { NewsBoard } from "../NewsBoard";
import datajson from "../../assets/data.json";
import { useState } from "react";
import management from "../../assets/management.json";

import ButtonFilter from "../Form/TypeFilter";
export function Dashboard() {
  const [data, setData] = useState(datajson.data);
  const [filterData, setFilterData] = useState(datajson.data);
  const [managementCard, setManagementCard] = useState(management.data);
  const filterCard = (type: string) => {
    const newData = data.filter((item) => item.type === type);
    setFilterData([...newData]);
  };
  const clearFilterCard = () => {
    setFilterData([...data]);
  };
  const removecard = (id: number) => {
    const index = filterData.findIndex((el: any) => el.id === id);
    if (index > -1) {
      filterData.splice(index, 1);
    }
    setData([...filterData]);
  };
  const removecardManagement = (id: number) => {
    const index = managementCard[0].boards.findIndex((el: any) => el.id === id);
    if (index > -1) {
      managementCard[0].boards.splice(index, 1);
    }
    setManagementCard([...managementCard]);
  };
  return (
    <Container>
      <SideLeft>
        <Content>
          <Text>Endomarketing</Text>
          <ButtonType>
            <ButtonFilter
              data={filterData}
              filterCard={filterCard}
              clearFilterCard={clearFilterCard}
            />
            <Button variant="contained">
              Criar
              <AddIcon fontSize="small" />
            </Button>
          </ButtonType>
        </Content>
        <NoticeBox>
          {filterData.length > 0 ? (
            filterData.map((element) => {
              return <NewsBoard data={element} removecard={removecard} />;
            })
          ) : (
            <h2>Listagem vazia!</h2>
          )}
        </NoticeBox>
      </SideLeft>
      <SideRight>
        <InformationBox />
        <ManagementCard
          management={management}
          removecardManagement={removecardManagement}
        />
      </SideRight>
    </Container>
  );
}
