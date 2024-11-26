import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Outlet } from 'react-router-dom';
import BackgroundChanger from './Component/BackgroundChanger';
import PasswordGenerator from './Component/PasswordGenerator';
import CurrencyExchange from './Component/CurrencyExchange';
import Header from './Component/RuterComponent/Header/Header';

function App() {
  return (
    <>
      {/* <BackgroundChanger /> */}
      {/* <PasswordGenerator /> */}
      {/* <CurrencyExchange /> */}
      <div className="flex flex-col w-full">
        <div className="top-0 flex justify-around bg-slate-400 w-full">
          <Header />
        </div>
        <div className='flex w-full justify-center'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
