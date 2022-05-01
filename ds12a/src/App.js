import logo from './assets/images/favicon.ico';
import {navLinks} from './data.js';
import './App.css';
import NavBar from './Components/NavBar.js';
import Landing from './Components/Landing';
import {Card, ProgressCard}  from './Components/Cards';

function App() {
  return (
    <div className="text-center">
      <title>Website of ds12a</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={logo} type="image/x-icon" />
      <NavBar links={navLinks} icon={logo}/>
      <Landing/>
      <div class="mx-10 my-10">
        <Card>
          <h1 id="about" className="underline decoration-sky-500"> About Me </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non tellus orci ac auctor augue mauris. Tempor nec feugiat nisl pretium fusce. Pellentesque pulvinar pellentesque habitant morbi tristique. Sodales ut etiam sit amet nisl purus in. Aliquam sem fringilla ut morbi tincidunt augue. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Lectus nulla at volutpat diam ut venenatis tellus in. Netus et malesuada fames ac turpis egestas maecenas pharetra. Maecenas ultricies mi eget mauris.
          </p>
        </Card>
        <Card>
          <h1 id="skills"> Skills </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non tellus orci ac auctor augue mauris. Tempor nec feugiat nisl pretium fusce. Pellentesque pulvinar pellentesque habitant morbi tristique. Sodales ut etiam sit amet nisl purus in. Aliquam sem fringilla ut morbi tincidunt augue. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Lectus nulla at volutpat diam ut venenatis tellus in. Netus et malesuada fames ac turpis egestas maecenas pharetra. Maecenas ultricies mi eget mauris.
          </p>
        </Card>
        <Card>
          <h1 id="projects"> Projects </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non tellus orci ac auctor augue mauris. Tempor nec feugiat nisl pretium fusce. Pellentesque pulvinar pellentesque habitant morbi tristique. Sodales ut etiam sit amet nisl purus in. Aliquam sem fringilla ut morbi tincidunt augue. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Lectus nulla at volutpat diam ut venenatis tellus in. Netus et malesuada fames ac turpis egestas maecenas pharetra. Maecenas ultricies mi eget mauris.
          </p>
        </Card>
        <Card>
          <h1 id="achievements"> Acheivements </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non tellus orci ac auctor augue mauris. Tempor nec feugiat nisl pretium fusce. Pellentesque pulvinar pellentesque habitant morbi tristique. Sodales ut etiam sit amet nisl purus in. Aliquam sem fringilla ut morbi tincidunt augue. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Lectus nulla at volutpat diam ut venenatis tellus in. Netus et malesuada fames ac turpis egestas maecenas pharetra. Maecenas ultricies mi eget mauris.
          </p>
        </Card>
      </div>
        
    </div>
  );
}

export default App;