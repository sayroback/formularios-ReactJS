import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import useFormulario from "../hooks/useFormulario";

const UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    profile: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formulario);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        type="text"
        name="name"
        placeholder="Nombre"
        value={formulario.name}
        onChange={handleChange}
      />
      <Input
        label="Apellido"
        type="text"
        name="lastname"
        placeholder="Apellido"
        value={formulario.lastname}
        onChange={handleChange}
      />
      <select
        className="select"
        name="profile"
        value={formulario.select}
        onChange={handleChange}
      >
        <option value="">--- Seleccione ---</option>
        <option value={3}> Admin </option>
        <option value={4}> Super Admin </option>
      </select>
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
