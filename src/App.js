import "./App.css";
import { Allroutes } from "./routes/Allroutes";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
