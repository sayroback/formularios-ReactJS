import React, { useState } from "react";
import "../style/Input.css";
import Card from "../components/Card";
import Container from "../components/Container";
import UserForm from "../components/UserForm";

const ModalMaster = () => {
  const [usuarios, setUsuarios] = useState([]);

  console.log(usuarios);

  const submit = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <UserForm submit={submit} />
        </div>
      </Card>
    </Container>
  );
};

export default ModalMaster;
