import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App"
import PasswordGenerator from "../Component/PasswordGenerator";
import CurrencyExchange from "../Component/CurrencyExchange";
import BackgroundChanger from "../Component/BackgroundChanger";

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<PasswordGenerator />} />
      <Route path="/passwordgenerator" element={<PasswordGenerator />} />
      <Route path="/currencyconvertor" element={<CurrencyExchange />} />
      <Route path="/colorchanger" element={<BackgroundChanger />} />
      {/* <Route path="/github" Component={() => {
        window.location.href = 'https://github.com/Ravizoce';
        return null;
      }} /> */}
    </Route>
  )
);

export default router;