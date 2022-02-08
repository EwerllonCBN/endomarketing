import { Container, User, UserInf, Notice, Button } from "./styles";
import SimpleModal from "../../components/Modal";
import MenuDelete from "../../components/MenuDelete";

export function NewsBoard({ data, removecard }: any) {
  return (
    <Container>
      <User>
        <img src={data.file.url} alt="schedule" width="73" height="73" />
      </User>

      <UserInf>
        <h2> {data.title} </h2>

        <Notice>
          <p>{data.type} |</p>

          <h2>{data.info.place && data.info.place} |</h2>
          <h2>{data.info.date}</h2>
          {data.type === "event" ? <SimpleModal /> : null}
        </Notice>

        <p>{data.description} </p>
      </UserInf>

      <Button>
        <button type="button">
          <MenuDelete data={data} removecard={removecard} />
        </button>
      </Button>
    </Container>
  );
}
