import { useEffectOnce } from "usehooks-ts";
import Summary from "../components/home/Summary";

const Home = () => {
  useEffectOnce(() => {
    console.log(
      "Gracias a todos las personas que me han enseñado/me enseñan y me han hacen convertirme en un mejor trabajador."
    );
    console.log("Thx to A. Guerra, que me inspiró para hacer esta web");
  });

  return <Summary />;
};

export default Home;
