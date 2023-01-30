import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyLayoutWithoutHeader from "./layouts/MyLayoutWithoutHeader";

import About from "./pages/About";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyLayoutWithoutHeader />}>
          <Route index element={<Home />}></Route>
          <Route path="sobre-mi" element={<About />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
