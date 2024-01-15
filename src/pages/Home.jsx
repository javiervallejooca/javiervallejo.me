import { useEffect } from "react";
import Summary from "../components/home/Summary";

const Home = () => {
  useEffect(() => {
    console.log(`
                                                                                                                
                                                                                                                
        TTTTTTTTTTTTTTTTTTTTTTThhhhhhh                                                kkkkkkkk                          
        T:::::::::::::::::::::Th:::::h                                                k::::::k                          
        T:::::::::::::::::::::Th:::::h                                                k::::::k                          
        T:::::TT:::::::TT:::::Th:::::h                                                k::::::k                          
        TTTTTT  T:::::T  TTTTTT h::::h hhhhh         aaaaaaaaaaaaa  nnnn  nnnnnnnn     k:::::k    kkkkkkk  ssssssssss   
                T:::::T         h::::hh:::::hhh      a::::::::::::a n:::nn::::::::nn   k:::::k   k:::::k ss::::::::::s  
                T:::::T         h::::::::::::::hh    aaaaaaaaa:::::an::::::::::::::nn  k:::::k  k:::::kss:::::::::::::s 
                T:::::T         h:::::::hhh::::::h            a::::ann:::::::::::::::n k:::::k k:::::k s::::::ssss:::::s
                T:::::T         h::::::h   h::::::h    aaaaaaa:::::a  n:::::nnnn:::::n k::::::k:::::k   s:::::s  ssssss 
                T:::::T         h:::::h     h:::::h  aa::::::::::::a  n::::n    n::::n k:::::::::::k      s::::::s      
                T:::::T         h:::::h     h:::::h a::::aaaa::::::a  n::::n    n::::n k:::::::::::k         s::::::s   
                T:::::T         h:::::h     h:::::ha::::a    a:::::a  n::::n    n::::n k::::::k:::::k  ssssss   s:::::s 
              TT:::::::TT       h:::::h     h:::::ha::::a    a:::::a  n::::n    n::::nk::::::k k:::::k s:::::ssss::::::s
              T:::::::::T       h:::::h     h:::::ha:::::aaaa::::::a  n::::n    n::::nk::::::k  k:::::ks::::::::::::::s 
              T:::::::::T       h:::::h     h:::::h a::::::::::aa:::a n::::n    n::::nk::::::k   k:::::ks:::::::::::ss  
              TTTTTTTTTTT       hhhhhhh     hhhhhhh  aaaaaaaaaa  aaaa nnnnnn    nnnnnnkkkkkkkk    kkkkkkksssssssssss    
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
        `);
    console.log(
      "A todas las personas que me han enseñado/me enseñan y me han hacen convertirme en un mejor trabajador."
    );
    console.log("Mención a A. Guerra, que me inspiró para hacer esta web ✌️");
  }, []);

  return <Summary />;
};

export default Home;
