import React from "react";
import SecondChild from "./SecondChild";

const FirstChild = ({ firstChild, data }) => {
  return (
    <SecondChild
      data={data}
      key={firstChild.children[0].id}
      secondChild={firstChild.children[0]}
    />
  );
};

export default FirstChild;
