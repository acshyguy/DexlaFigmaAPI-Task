import React from "react";

const ThirdChild = ({ thirdChild, data, name }) => {
  const style = {
    backgroundColor: thirdChild.backgroundColor,
    background: thirdChild.background,
    scrollBehavoir: thirdChild.scrollBehavoir,
    width: thirdChild.absoluteBoundingBox.width,
    height: thirdChild.absoluteBoundingBox.height,
    padding: thirdChild.absoluteBoundingBox.x,
    margin: thirdChild.absoluteBoundingBox.y,
  };
  return (
    <div style={style} key={thirdChild.children[0].id}>
      <p>{name}</p>
      <img src={data.thumbnailUrl} alt="logo" />
    </div>
  );
};

export default ThirdChild;
