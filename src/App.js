import logo from "./logo.svg";
import "./App.css";
import Auth from "./pages/Authurization";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Router from "./Router";
import Theme from "./Prooviders/ThemeProvider";

function App() {
  return (
    <div
    // className="App"
    >
      {/* <Auth/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      <Theme>
        <Router />
      </Theme>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
