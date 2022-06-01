import React from "react";
import Input from "./Input";
import Button from "./Button";
import useFormulario from "../../hooks/useFormulario";

const UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = useFormulario({
    fullName: "",
    profile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formulario.profile);
    if (formulario.profile) {
      submit(formulario);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre completo"
        type="text"
        name="fullName"
        placeholder="Nombre"
        value={formulario.fullName}
        onChange={handleChange}
      />
      <select
        className="select"
        name="profile"
        value={formulario.profile}
        onChange={handleChange}
      >
        <option value="">Tipo de administrador</option>
        <option value="3"> Admin </option>
        <option value="4"> Super Admin </option>
      </select>
      {!formulario.profile && <p>Elige un perfil</p>}
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
