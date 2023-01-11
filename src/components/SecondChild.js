import React from "react";
import ThirdChild from "./ThirdChild";

const SecondChild = ({ secondChild, data }) => {
  const style = {
    backgroundColor: secondChild.backgroundColor,
    background: secondChild.background,
    scrollBehavoir: secondChild.scrollBehavoir,
  };
  return (
    <div style={style}>
      <ThirdChild
        data={data}
        key={secondChild.children[0].id}
        thirdChild={secondChild.children[0]}
        name={secondChild.name}
      />
    
    </div>
  );
};

export default SecondChild;
