import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AllBagels from "../components/AllBagels";

function BagelContainer() {
  const bagels = useSelector((state) => state.bagels);
  return (
    <div>
      <h1>This is BAGEL CONTAINER!</h1>;
      <AllBagels />
    </div>
  );
}

export default BagelContainer;
