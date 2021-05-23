import React, { useState} from 'react';
import './ShutterButton.css';

export const ShutterButton = ({
  buttonSize,
  textcolor,
  buttonhovercolor,
  description
}) => {
  const checkButtonSize = buttonSize ? buttonSize : ' ';

  const checkTextColor = textcolor ? textcolor : 'text-dark';

  const checkButtonHoverColor = buttonhovercolor ? buttonhovercolor : 'bg-dark';

  const [button, setButton] = useState(true);
  const handleButton = () => setButton(!button);

  return (
    // <div className={`button-holder`}>
      <div className={`shutterbtn-style ${checkButtonSize} ${checkTextColor}`} onClick={handleButton}>
        <span className={button ? `${checkButtonHoverColor}` : `${checkButtonHoverColor} fadeborder`}> </span>
        <span> {description} </span>
      {/* </div> */}
    </div>
  );
};
