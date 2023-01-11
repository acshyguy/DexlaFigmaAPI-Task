import React from "react";

const Footer = ({ fourthChild, data }) => {
  const styles = {
    ...data.styles[fourthChild.styles.fill],
    ...data.styles[fourthChild.styles.text],
    ...fourthChild.style,

    scrollBehavoir: fourthChild.scrollBehavoir,
    width: fourthChild.absoluteBoundingBox.width,
    height: fourthChild.absoluteBoundingBox.height,
    padding: fourthChild.absoluteBoundingBox.x,
    margin: fourthChild.absoluteBoundingBox.y,
   
    mixBlendMode:  fourthChild.blendMode,
  };
  return <div style={styles}>{fourthChild.characters}</div>;
};

export default Footer;
