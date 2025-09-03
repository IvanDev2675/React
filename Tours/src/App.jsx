import { useEffect,useState } from "react";
import {toursData} from './data'
import { Tours } from "./Tours";


const App = () => {


  const [isLoading,setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

 const fetchTours = () => {
    setIsLoading(true);
    // Simula carga de API
    const timer = setTimeout(() => {
      setTours(toursData);
      setIsLoading(false);
    }, );
    
    return () => clearTimeout(timer);
  };


  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

useEffect(() => {
fetchTours();
},[])


if(tours.length === 0){
  return(
<main>

  <div className="title">
    <h2 >No hay tours disponibles</h2>
    <button type= "button" className="btn" style={{marginTop:'3rem'}} onClick={() => fetchTours()}>Recargar</button>
  </div>

</main>
  )
}

  return <main>
    <Tours tours={tours} removeTour ={removeTour} />
  </main>
};
export default App;
