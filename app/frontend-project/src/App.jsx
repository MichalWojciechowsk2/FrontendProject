import "./App.css";
import CarProfile from "../lab01/CarProfile";
import { data } from "../lab01/module-data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Car List</h1>
        {data.map((car) => (
          <CarProfile key={car.id} car={car} />
        ))}
      </header>
    </div>
  );
}

export default App;
