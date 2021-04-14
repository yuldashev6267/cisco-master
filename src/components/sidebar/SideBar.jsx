import React, { useState } from "react";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import OurShops from "../ourShops/OurShops";
import classes from "./styles.module.css";

const AdminSideBar = () => {
  const [activeMenu, setActiveMenu] = useState();
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__logo}>
        <Link>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className={classes.sidebar__nav}>
        <div className={classes.sidebar__title}>Home</div>
        <div className={classes.nav}>
          <Link
            to="/admin-panel"
            className={activeMenu == "admin-panel" ? classes.active : ""}
            onClick={() => setActiveMenu("admin-panel")}
          >
            Заявки
          </Link>
          <Link
            to="/admin-point-of-sales"
            className={
              activeMenu == "admin-point-of-sales" ? classes.active : ""
            }
            onClick={() => setActiveMenu("admin-point-of-sales")}
          >
            Точки продаж
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AdminSideBar;
