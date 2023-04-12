import "./App.css";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import InputComponent from "./components/TextAreaComponent";
import TextAreaComponent from "./components/InputComponent";
import KeepAlive, { useAliveController } from "react-activation";
import { useEffect, useState } from "react";

function App() {
  const [inputMorethan10, setInputtext] = useState(false);
  const inputChange = (text) => {
    setInputtext(text.length > 10);
  };
  const { drop, dropScope, clear, getCachingNodes } = useAliveController();
  // useEffect(() => {
  //   if (inputMorethan10) {
  //     clear(); // seems not work
  //   } else {
  //     // refresh("input");
  //   }
  // }, [clear, inputMorethan10]);

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/input">
            go to keepALive Input when input length is less than 10
          </Link>
        </li>
        <li>
          <Link to="/textArea">go to Text area</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Routes>
            <Route
              path="/input"
              element={
                <KeepAlive
                  cacheKey={"UNIQUE_ID_INPUT"}
                  when={() => !inputMorethan10}
                >
                  <InputComponent inputChange={inputChange} />
                </KeepAlive>
              }
            ></Route>
            <Route path="/textArea" element={<TextAreaComponent />}></Route>
          </Routes>
        </li>
      </ul>
    </BrowserRouter>
  );
}

export default App;
