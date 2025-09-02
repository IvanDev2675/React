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
    }, 1500);
    
    return () => clearTimeout(timer);
  };



  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

useEffect(() => {
fetchTours();
},[])


  return <main>
    <Tours tours={tours} removeTour ={removeTour} />
  </main>
};
export default App;
