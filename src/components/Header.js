import React from 'react'

const Header = ({content, data}) => {
    const styles = {
        ...data.styles[content.styles.fill],
        ...data.styles[content.styles.text],
        ...content.style,

        scrollBehavoir: content.scrollBehavoir,
        width: content.absoluteBoundingBox.width,
        height: content.absoluteBoundingBox.height,
        padding: content.absoluteBoundingBox.x,
        margin: content.absoluteBoundingBox.y,
       
        mixBlendMode:  content.blendMode,
      };
      return <div style={styles}>{content.characters}</div>;
}

export default Header