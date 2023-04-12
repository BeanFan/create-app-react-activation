import React, { useRef, useState } from "react";

export default function InputComponent(props) {
  let [text, setText] = useState("");
  let inputRef = useRef();

  return (
    <div>
      <h1>{text} h1</h1>

      <input
        ref={inputRef}
        onInput={() => {
          setText(inputRef.current.value);
          props.inputChange(inputRef.current.value);
        }}
      ></input>
    </div>
  );
}
