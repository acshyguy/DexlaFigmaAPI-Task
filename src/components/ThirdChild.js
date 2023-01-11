import React from "react";
import Footer from "./Footer";
import Vector from "../asset/Dexla.png";
import Header from "./Header";
const ThirdChild = ({ thirdChild, data, name }) => {
  const style = {
    backgroundColor: thirdChild.backgroundColor,
    background: thirdChild.background,
    scrollBehavoir: thirdChild.scrollBehavoir,
    scrollAlign: thirdChild.scrollAlign,
    width: thirdChild.absoluteBoundingBox.width,
    height: thirdChild.absoluteBoundingBox.height,
    padding: thirdChild.absoluteBoundingBox.x,
    margin: thirdChild.absoluteBoundingBox.y,
    itemSpacing: thirdChild.itemSpacing,
    
  };

  return (
    <div style={style} key={thirdChild.children[0].id}>
      <p>{name}</p>

      <Header data={data} content={thirdChild.children[0]} />

      <Footer
        key={thirdChild.children[1].id}
        fourthChild={thirdChild.children[1]}
        data= {data}
      />

      <img src={Vector} alt="logo" />

    </div>
  );
};

export default ThirdChild;
