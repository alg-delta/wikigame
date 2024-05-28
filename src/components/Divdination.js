import React, { useState } from "react";
import dataDivdination from "./dataDivdination";

const Divdination = () => {
  const [index, setIndex] = useState(null);
  const [hideText, setHideText] = useState(false);

  const handleClick = () => {
    const max = dataDivdination.length;
    const indexRandom = Math.floor(Math.random() * max);
    setIndex(indexRandom);
    setHideText(true);
    setTimeout(() => setHideText(false), 500);
  };

  return (
    <div className="di">
      <h1>За яку країну пограти сьогодні?</h1>
      <p className={hideText ? "hide" : ""}>
        {index !== null && dataDivdination[index]}
      </p>
      <button type="button" onClick={handleClick} className="divdi">
        Грати
      </button>
    </div>
  );
};

export default Divdination;
