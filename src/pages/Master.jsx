import React from "react";
import ModalMaster from "../components/ModalMaster";

const Master = () => {
  const [modalAdmin, setModalAdmin] = React.useState(false);

  const openModalAdmin = (props) => {
    setModalAdmin((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={openModalAdmin}>Modal</button>
      <div>{!!modalAdmin && <ModalMaster />}</div>
    </div>
  );
};

export default Master;
