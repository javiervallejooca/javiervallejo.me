import { useEffect } from "react";

import Summary from "../components/home/Summary";

const Home = () => {
  useEffect(() => {
    console.log(
      "Gracias a todos las personas que me han enseñado y me han hecho convertirme en el trabajador que soy."
    );
    console.log("Thx to A. Guerra, que me inspiró para hacer esta web");
  }, []);

  return <Summary />;
};

export default Home;
