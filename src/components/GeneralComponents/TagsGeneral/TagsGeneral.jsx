import React, { useState } from 'react';
import './TagsGeneral.css';

export const TagsGeneral = ({ id, text, imageSrc, textColor, backgroundColor }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const buttonStyle = {
    color: textColor,
    backgroundColor: backgroundColor,
  };

  const handleClick = () => {
    setIsActive(!isActive);
    setActiveId(isActive ? id : null);
  };

  const buttonClassName = isActive ? 'TagsGeneral activeTagsGeneral' : 'TagsGeneral';

  return (
    <button className={buttonClassName} style={buttonStyle} onClick={handleClick}>
      {text}
      {imageSrc && <img src={imageSrc} alt="Imagen" />}
    </button>
  );
};

export default TagsGeneral;
