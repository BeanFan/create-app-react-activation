import React, { useRef, useState } from "react";

export default function TextAreaComponent() {
  let [text, setText] = useState("");
  let inputRef = useRef();

  return (
    <div>
      <h1>{text} h1</h1>

      <textarea
        ref={inputRef}
        onInput={() => {
          setText(inputRef.current.value);
        }}
      ></textarea>
    </div>
  );
}
