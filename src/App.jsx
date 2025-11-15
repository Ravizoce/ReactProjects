import { useState } from "react";
// import './App.css'
import { Outlet } from "react-router-dom";
import Header from "./Component/RuterComponent/Header/Header";
import UserContextProvider from "./context/UserContextProvider";
import Switch from "./Component/Butons/switch";

function App() {
  return (
    <>
      {/* <BackgroundChanger /> */}
      {/* <PasswordGenerator /> */}
      {/* <CurrencyExchange /> */}
      {/* <UserContextProvider> */}
      {/* <Switch/> */}
      <div className="flex flex-col w-full">
        <div className="top-0 flex justify-around bg-slate-400 w-full">
          <UserContextProvider>
            <Header />
          </UserContextProvider>
        </div>
        <div className="flex w-full justify-center">
          {/* <UserContextProvider> */}
          <Outlet />
          {/* </UserContextProvider> */}
         </div>
      </div>
      {/* </UserContextProvider>  */}
      </>
  );
}

export default App;
