import MainContextProvider from "./contexts/main-context";
import AppRouter from "./App-Router";

const App = () => {
  return (
    <div className="App">
      <MainContextProvider>
        <AppRouter />
      </MainContextProvider>
    </div>
  );
}

export default App;