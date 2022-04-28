import logo from './images/favicon.ico';
import './App.css';
import {NavBar} from './Components/NavBar.js';

function App() {
  return (
    <div className="App">
      <title>Website of ds12a</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={logo} type="image/x-icon" />
      <NavBar icon={logo}/>
    </div>
  );
}

export default App;