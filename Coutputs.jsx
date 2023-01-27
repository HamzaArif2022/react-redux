import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

function Coutputs() {
  const calculation = useSelector((state) => state.result);
  const val1 = useSelector((state) => state.valeur1);
  const val2 = useSelector((state) => state.valeur2);
  const operator = useSelector((state) => state.operator);
  return (
      <div className="contanier2">
          <div className="child">
      {val1}  {operator}   {val2} = {calculation}
              
          </div>
    </div>
  );
}

export default Coutputs;
