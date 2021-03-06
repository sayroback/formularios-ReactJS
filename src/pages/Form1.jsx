import React from "react";

function Form1() {
  const submit = (event) => {
    event.preventDefault();
    const dataForm = Array.from(new FormData(event.target));
    const objDataForm = Object.fromEntries(dataForm);
    console.log(objDataForm);
  };

  return (
    <form onSubmit={submit}>
      <div>
        <h1>Form 1</h1>
        <input type="text" name="campo" />
      </div>
      <input type="text" name="campo-2" />
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default Form1;
