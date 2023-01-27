import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add, div, multi, Sous } from "./Action";
import '../App.css'
function Calculator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const dispatch = useDispatch();

  const handleInput1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2 = (e) => {
    setInput2(e.target.value);
  };

  const handleAdd = () => {
    dispatch(add({ val1: input1, val2: input2 }));
  };

  const handleSubtract = () => {
    dispatch(Sous({ val1: input1, val2: input2 }));
  };

  const handleMultiply = () => {
    dispatch(multi({ val1: input1, val2: input2 }));
  };

  const handleDivide = () => {
    if (input2 === "0") {
      alert("Can't divide by zero");
    } else {
      dispatch(div({ val1: input1, val2: input2 }));
    }
  };

  return (
    <>
    <h1 className="header">Wellcome To Your Calculator With REDUX </h1>
    <div className="container">
      <input type="text" value={input1} onChange={handleInput1} />
      <input type="text" value={input2} onChange={handleInput2} />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDivide}>/</button>
    </div>
    </>
  );
}

export default Calculator;
