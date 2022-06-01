import { React, useRef } from "react";

const Form2 = () => {
  const input = useRef();
  const file = useRef();
  const submit = () => {
    console.log(input.current.value);
    console.log(file.current.files[0]);
  };

  return (
    <div>
      <div>
        <h1>Form 2</h1>
        <input type="text" name="campo" ref={input} />
        <input type="file" ref={file} />
      </div>
      <input type="submit" value="Enviar" onClick={submit} />
    </div>
  );
};

export default Form2;
