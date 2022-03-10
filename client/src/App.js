
import MainContextProvider from "./contexts/main-context";
import Hotels from "./components/pages/Hotels";
import Activities from "./components/pages/Activities";
import Restaurants from "./components/pages/Restaurants";

function App() {

  return (
    <div className="App">
      <MainContextProvider>
        <h1>tikva</h1>
        <Hotels/>
        <Activities/>
        <Restaurants/>
      </MainContextProvider>
    </div>
  );
}

export default App;
