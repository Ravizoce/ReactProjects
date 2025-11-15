import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import App from "../App";
import PasswordGenerator from "../Component/PasswordGenerator";
import CurrencyExchange from "../Component/CurrencyExchange";
import BackgroundChanger from "../Component/BackgroundChanger";
import Login from "../Component/Login.jsx";
import Profile from "../Component/Profile.jsx";
import UserContextProvider from "../context/UserContextProvider.jsx";

// const router = createBrowserRouter([
//     {
//       path:"/",
//       element:<App />,
//       children:[
//         {
//           path:"/",
//           element:<PasswordGenerator />,
//         },
//         {
//           path:"/passwordgenerator",
//           element:<PasswordGenerator />,
//         },
//         {
//           path:"/currencyconvertor",
//           element:<CurrencyExchange />,
//         },
//         {
//           path:"/colorchanger",
//           element:<BackgroundChanger />,
//         },

//       ]
//     }
//   ])

const UserAuthLayout = ()=>{
  return <UserContextProvider>
    <Outlet/>
  </UserContextProvider>
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<PasswordGenerator />} />
      <Route path="/passwordgenerator" element={<PasswordGenerator />} />
      <Route path="/currencyconvertor" element={<CurrencyExchange />} />
      <Route path="/colorchanger" element={<BackgroundChanger />} />
      <Route element={<UserAuthLayout/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Route>
  )
);

export default router;
