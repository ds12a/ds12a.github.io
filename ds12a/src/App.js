import logo from './assets/images/favicon.ico';
import {navLinks, skillLangs, skillLibs, projects, achievements} from './data.js';
import './App.css';
import NavBar from './Components/NavBar.js';
import Landing from './Components/Landing';
import {ProgressCard, ProjectCard, TitleTextCard}  from './Components/Cards';
import Grid from './Components/Grid';

function App() {
  return (
    <div className="text-center">
      <title>Website of ds12a</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={logo} type="image/x-icon" />
      <header class="sticky top-0 z-50">
        <div class="bg-yellow-200 relative text-yellow-600 py-3 px-3">
            This website is still under active development.
        </div>
        <NavBar links={navLinks} icon={logo}/>
      </header>
      <Landing/>
      <div class="mx-10 my-10">
        <div className="grid grid-cols-2 divide-x">
          <div className="grid justify-center">
            <h1 id="about" className="underline decoration-sky-500"> About Me </h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-50 w-50 hover:animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>    
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non tellus orci ac auctor augue mauris. Tempor nec feugiat nisl pretium fusce. Pellentesque pulvinar pellentesque habitant morbi tristique. Sodales ut etiam sit amet nisl purus in. Aliquam sem fringilla ut morbi tincidunt augue. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Lectus nulla at volutpat diam ut venenatis tellus in. Netus et malesuada fames ac turpis egestas maecenas pharetra. Maecenas ultricies mi eget mauris.
          </p>
        </div>

        <br/>

        <h1 id="skills"> Skills </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non tellus orci ac auctor augue mauris. Tempor nec feugiat nisl pretium fusce. Pellentesque pulvinar pellentesque habitant morbi tristique. Sodales ut etiam sit amet nisl purus in. Aliquam sem fringilla ut morbi tincidunt augue. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Lectus nulla at volutpat diam ut venenatis tellus in. Netus et malesuada fames ac turpis egestas maecenas pharetra. Maecenas ultricies mi eget mauris.
        </p>

        <br/>

        <h2> Programming Languages </h2>
        <Grid>
          {
            skillLangs.map((s) => {
              return <ProgressCard title={s.name} pct={s.pct} text={s.description}/>   
            })
          }
        </Grid>  

        <br/>

        <h2> Programming Libraries </h2>
        <Grid>
          {
            skillLibs.map((s) => {
              return <ProgressCard title={s.name} pct={s.pct} text={s.description}/>   
            })
          }
        </Grid> 
        
        <br/>

        <h1 id="projects"> Projects </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non tellus orci ac auctor augue mauris. Tempor nec feugiat nisl pretium fusce. Pellentesque pulvinar pellentesque habitant morbi tristique. Sodales ut etiam sit amet nisl purus in. Aliquam sem fringilla ut morbi tincidunt augue. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Lectus nulla at volutpat diam ut venenatis tellus in. Netus et malesuada fames ac turpis egestas maecenas pharetra. Maecenas ultricies mi eget mauris.
        </p>
        <Grid>
          {
            projects.map((s) => {
              return <ProjectCard title={s.name} link={s.link} text={s.description}/>   
            })
          }
        </Grid>

        <br/>

        <h1 id="achievements"> Acheivements </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non tellus orci ac auctor augue mauris. Tempor nec feugiat nisl pretium fusce. Pellentesque pulvinar pellentesque habitant morbi tristique. Sodales ut etiam sit amet nisl purus in. Aliquam sem fringilla ut morbi tincidunt augue. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Lectus nulla at volutpat diam ut venenatis tellus in. Netus et malesuada fames ac turpis egestas maecenas pharetra. Maecenas ultricies mi eget mauris.
        </p>
        <Grid>
          {
            achievements.map((s) => {
              return <TitleTextCard title={s.name} text={s.description}/>   
            })
          }
        </Grid>  
      </div>
    </div>
  );
}

export default App;