import { useEffect } from "react";
import { useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [IsLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      //console.log(tours);
      setTours(tours);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (IsLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if(tours.length < 1)
  {
    return <main>
      <div className="title">
      <h2>No tours left</h2>
      <button type="button" style={{marginTop:'2rem'}} className="btn" onClick={()=>fetchTours()}>refresh</button>
      </div>
    </main>
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
