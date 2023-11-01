import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//pages
import App from "../App";
import Home from "../assets/components/Home";
import Shop from "../assets/components/Shop";
import gameImageLoader from "../assets/components/homeComponents/CarouselImage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} loader={gameImageLoader} />
      <Route path="shop" element={<Shop />} />
    </Route>
  )
);

export default router;
