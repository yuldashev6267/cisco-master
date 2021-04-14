import React from "react";
import GridComponet from "../GridComponent/GridComponent";

import CardEdit from "../cardEdit/CardEdit";
const EditPointOfSales = (props) => {
  const idNum = props.location.pathname.split("/")[2];
  return (
    <GridComponet>
      <CardEdit BtnText="Izmenit" id={idNum} />
    </GridComponet>
  );
};

export default EditPointOfSales;
