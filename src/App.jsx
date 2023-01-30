import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyLayoutWithoutHeader from "./layouts/MyLayoutWithoutHeader";

const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Loading = lazy(() => import("./components/Loading"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MyLayoutWithoutHeader />}>
            <Route index element={<Home />}></Route>
            <Route path="sobre-mi" element={<About />}></Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
