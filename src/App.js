import "./App.scss";
import ContactProvider from "./components/ContactContext";
// import Routing from "./components/routing/Routing";

function App() {
  return (
    <div className="App">
      <ContactProvider />
      {/* <Routing /> */}
    </div>
  );
}

export default App;
