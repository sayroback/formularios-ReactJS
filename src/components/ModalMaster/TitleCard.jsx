import React from "react";
import "./style/TitleCard.css";
import CloseIcon from "@mui/icons-material/Close";

const TitleCard = ({ openModalAdmin }) => {
  return (
    <div className="TitleCard">
      <h1>Crear administrador</h1>
      <div onClick={openModalAdmin} className="iconCloseModalCreateAdmin">
        <CloseIcon />
      </div>
    </div>
  );
};

export default TitleCard;
