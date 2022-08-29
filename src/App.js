import "./App.css";
import Products from "./components/Products";
import Logo from "./assets/logo.PNG";
function App() {
  return (
    <div className="App">
      <img src={Logo} alt="company-logo" className="logo"></img>
      <Products />
    </div>
  );
}

export default App;
