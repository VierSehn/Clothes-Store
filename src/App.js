import { Route, Routes } from "react-router-dom";

import NavigationBar from "./routes/navigation-bar/navigation-bar.component";
import Home from "./routes/home/home.component";

const Shop = () => <p>Gop stop shop</p>;

const App = () => (
  <Routes>
    <Route path="/" element={<NavigationBar />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
    </Route>
  </Routes>
);

export default App;
