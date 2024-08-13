import { Outlet } from "react-router-dom";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import classes from "./RootLayout.module.scss";
import { useState } from "react";
import LoginForm from "../../../components/Header/LoginForm";

const RootLayout = () => {
  const [isShowSearchBox, setIsShowSearchBox] = useState(false);
  const [isOpenSearchAdvance, setIsOpenSearchAdvance] = useState(false);
  const [loginBox, setLoginBox] = useState("");

  const onClickOutsideHandle = () => {
    setIsShowSearchBox(false);
    setIsOpenSearchAdvance(false);
  };

  return (
    <div onClick={onClickOutsideHandle} className={classes.rootLayout}>
      <Sidebar></Sidebar>
      <div className={classes.mainContain}>
        <Header
          isShowSearchBox={isShowSearchBox}
          setIsShowSearchBox={setIsShowSearchBox}
          isOpenAdvance={isOpenSearchAdvance}
          setIsOpenAdvance={setIsOpenSearchAdvance}
          loginBox={loginBox}
          setLoginBox={setLoginBox}
        ></Header>
        <Outlet></Outlet>
        {loginBox && <LoginForm setLoginBox={setLoginBox} />}
      </div>
    </div>
  );
};

export default RootLayout;
