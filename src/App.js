import React, { useState, useEffect } from "react";
import FirstChild from "./components/FirstChild";
function App() {
  const [data, setData] = useState({});
  const [isButton, setIsButton] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await fetch(
      "https://api.figma.com/v1/files/vRCqsniN1t2PndqlKeYQwI",
      {
        method: "GET",
        headers: new Headers({
          "X-Figma-Token": `figd_dN1neMPKHHmnDFU4AFlSMPwv6ZqLqK_ANxk7hj3l`,
          "Content-Type": "application/json",
        }),
      }
    );
    const jsonData = await response.json();
    jsonData && response.ok ? setData(jsonData) : setData({});
  };


  const handleClick = async () => {
    setIsButton(!isButton);
    await getData();
  };

  const close = () => {
    setData({});
    setIsButton(!isButton);
  };

  return (
    <>
      <button onClick={() => handleClick()}>Import</button>
      {isButton ? <button onClick={close}>Close</button> : ""}

      {data && isButton
        ? data?.document?.children.map((child) => {
            return (
              <>
                <FirstChild data={data} key={child.id} firstChild={child} />
              </>
            );
          })
        : ""}
    </>
  );
}

export default App;
