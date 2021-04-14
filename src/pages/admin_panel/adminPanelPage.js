import React from "react";
import { Route } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import AllRequests from "../../components/allRequests/AllRequests";
import ProtectedRouter from "../../components/protectedRouter/ProtectedRouter";
import OurShops from "../../components/ourShops/OurShops";
import AddPointOfSales from "../../components/addPointOfSales/AddPointOfSales";
import EditPointOfSales from "../../components/editPointofSales/EditPointOfSales";
const loginPage = () => {
  return (
    <>
      <SideBar />
      <ProtectedRouter
        exact
        path="/admin-point-of-sales"
        component={OurShops}
      />
      <ProtectedRouter exact path="/admin-panel" component={AllRequests} />
      <ProtectedRouter
        exact
        path="/admin-add-shops"
        component={AddPointOfSales}
      />
      <ProtectedRouter
        exact
        path="/edit-point-of-sales-shops/:id"
        component={EditPointOfSales}
      />
    </>
  );
};
export default loginPage;
