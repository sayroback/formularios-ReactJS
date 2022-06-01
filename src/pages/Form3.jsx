import { React, useState } from "react";

const ModalMaster = () => {
  const [value, setValue] = useState({
    normal: "",
    texto: "",
    select: "",
    check: false,
    estado: "",
  });

  const handleChange = ({ target }) => {
    setValue((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };
  console.log(value);
  return (
    <form>
      <div>
        <label htmlFor="">
          <h1>Form 3</h1>
        </label>
        <div>X</div>
      </div>

      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      <textarea
        name="texto"
        value={value.texto}
        onChange={handleChange}
      ></textarea>

      <select name="select" value={value.select} onChange={handleChange}>
        <option value="">--- Seleccione ---</option>
        <option value="chanchofeliz"> Chancho feliz </option>
        <option value="chanchitofeliz"> Chanchito feliz </option>
        <option value="chanchitotriste"> Chanchito triste </option>
        <option value="felipe"> Felipe -</option>
      </select>

      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />

      <div>
        <label htmlFor="Chancho"></label>
        <input
          onChange={handleChange}
          type="radio"
          name="estado"
          value="feliz"
          checked={value.estado === "feliz"}
        />
        feliz
        <input
          onChange={handleChange}
          type="radio"
          name="estado"
          value="triste"
          checked={value.estado === "triste"}
        />
        triste
        <input
          onChange={handleChange}
          type="radio"
          name="estado"
          value="felipe"
          checked={value.estado === "felipe"}
        />
        felipe
      </div>
    </form>
  );
};

export default ModalMaster;
