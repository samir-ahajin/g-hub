import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//pages
import App from "../App";
import Home from "../assets/components/Home";
import Shop from "../assets/components/Shop";
import gameImageLoader from "../assets/components/Api";
import { loadAllData, loadData, getInfo } from "../api/Getdata";
import GameDetails from "../assets/components/shopComponents/GameDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} loader={gameImageLoader} />
      <Route
        path="shop"
        element={<Shop />}
        loader={() => {
          return loadAllData();
        }}
      >
        <Route path=":id" element={<GameDetails />} loader={getInfo} />

        <Route />
      </Route>
    </Route>
  )
);

export default router;
