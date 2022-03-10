import {  GetRestaurants } from "./services/restaurant-services";


GetRestaurants().then((res) => console.log(res));
console.log(process.env.NODE_ENV);
// console.log(BASE_URL);
function App() {
  return (
    <div className="App">
      <h1>tikva</h1>
    </div>
  );
}

export default App;
