import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyLayoutWithoutHeader from "./layouts/MyLayoutWithoutHeader";

import Inicio from "./pages/Inicio";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyLayoutWithoutHeader />}>
          <Route index element={<Inicio />}></Route>
          <Route path="sobre-mi" element={<About />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
