import React from "react";
import ThirdChild from "./ThirdChild";

const SecondChild = ({ secondChild, data }) => {
  const style = {
    ...data.styles[secondChild.styles.strokes],
    backgroundColor: secondChild.backgroundColor,
    background: secondChild.background,
    scrollBehavoir: secondChild.scrollBehavoir,
    blendMode: secondChild.blendMode,
    width: secondChild.absoluteBoundingBox.width,
    height: secondChild.absoluteBoundingBox.height,
    padding: secondChild.absoluteBoundingBox.x,
    margin: secondChild.absoluteBoundingBox.y,
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
