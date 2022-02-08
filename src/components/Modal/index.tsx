import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Container, UserInf, User } from "./styles";
import data from "../../assets/data.json";
import { MdCheckCircle, MdCancel } from "react-icons/md";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    borderRadius: 10,
    backgroundColor: theme.palette.background.paper,
    padding: 60,
  },
}));

export default function SimpleModal() {
  console.log("Modal: ", data);

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p onClick={handleOpen}>
        <h2>| Confirmados</h2>
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Container style={modalStyle} className={classes.paper}>
          <h1 id="simple-modal-title">Usuários Confirmados</h1>

          {data.data[0].invited_people?.map((user: any) => (
            <UserInf>
              <img src={user.avatar} alt="user" width="80px" height="80px" />

              <User>
                <h2>
                  {user.name}
                  {user.confirmed_presence == true ? (
                    <MdCheckCircle color="green" />
                  ) : (
                    <MdCancel color="red" />
                  )}
                </h2>
                <h3>@{user.username}</h3>
              </User>
            </UserInf>
          ))}
        </Container>
      </Modal>
    </div>
  );
}
