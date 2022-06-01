import React, { useState } from "react";
import "./style/Input.css";
import Card from "./Card";
import Container from "./Container";
import UserForm from "./UserForm";
import TitleCard from "./TitleCard";

const ModalMaster = ({ openModalAdmin }) => {
  const [usuarios, setUsuarios] = useState([]);
  console.log(usuarios);
  const submit = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  return (
    <div
      style={{
        height: "100vh",
        boxSizing: "border-box",
        paddingTop: 60,
      }}
    >
      <Container>
        <Card>
          <TitleCard openModalAdmin={openModalAdmin} />
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} openModalAdmin={openModalAdmin} />
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default ModalMaster;
