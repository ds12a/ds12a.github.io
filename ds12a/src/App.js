import logo from './assets/images/favicon.ico';
import {navLinks, skillLangs, skillLibs, projects, achievements} from './data.js';
import './App.css';
import {NavBar, IconLinks} from './Components/NavBar.js';
import Landing from './Components/Landing';
import {ProgressCard, ProjectCard, TitleTextCard}  from './Components/Cards';
import Grid from './Components/Grid';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="text-center">
      <link rel="icon" href={logo} type="image/x-icon" />
      <header className="sticky top-0 z-50">
        <div className="bg-yellow-200 relative text-yellow-600 py-3 px-3">
            This website is still under active development.
        </div>
        <NavBar links={navLinks} icon={logo}/>
      </header>
      <Landing/>
      <div className="mx-10 my-10">
        <div className="grid grid-cols-2 divide-x">
          <div className="grid justify-center">
            <h1 data-aos="fade-right" id="about" className="underline decoration-sky-500"> About Me </h1>
            <svg data-aos="zoom-in" xmlns="http://www.w3.org/2000/svg" className="h-50 w-50 hover:animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>    
          </div>
          <p data-aos="zoom-in-left">
            Hi there! I am _______ at ________. I attend ________ and study __________. I am facinated by recent advacements in deep learning and am passionate about programming and math. Check out my Github profile if you have some time to kill. There's not much else I'd like to share, so here is some more text to fill up this space as it looks rather ugly without the extra text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in.
          </p>
        </div>

        <br/>

        <h1 data-aos="fade-right" id="skills"> Skills </h1>
        <p data-aos="fade-down">
          Here are some of the skills I have aquired. Once again, I am forced to provide extra text in order to fill up this space and make this look remotely nice. Enjoy! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non tellus orci ac auctor augue mauris. Tempor nec feugiat nisl pretium fusce. Pellentesque pulvinar pellentesque habitant morbi tristique. Sodales ut etiam sit amet nisl purus in. Aliquam sem fringilla ut morbi tincidunt augue.
        </p>

        <br/>

        <h2 data-aos="fade-right"> Programming Languages </h2>
        <Grid>
          {
            skillLangs.map((s) => {
              return <ProgressCard key={s.name} title={s.name} pct={s.pct} text={s.description}/>   
            })
          }
        </Grid>  

        <br/>

        <h2 data-aos="fade-right"> Programming Libraries/Frameworks </h2>
        <Grid>
          {
            skillLibs.map((s) => {
              return <ProgressCard key={s.name} title={s.name} pct={s.pct} text={s.description}/>   
            })
          }
        </Grid> 
        
        <br/>

        <h1 data-aos="fade-right" id="projects"> Projects </h1>
        <p data-aos="fade-down">
        Here are some of the skills I have aquired. Once again, I am forced to provide extra text in order to fill up this space and make this look remotely nice. It probably makes you wonder why I even have a website if I don't have much to put on it. Enjoy! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non tellus orci ac auctor augue mauris. 
        </p>
        <Grid>
          {
            projects.map((s) => {
              return <ProjectCard key={s.name} title={s.name} link={s.link} text={s.description}/>   
            })
          }
        </Grid>

        <br/>

        <h1 data-aos="fade-right" id="achievements"> Acheivements </h1>
        <p data-aos="fade-down">
          Here are some of my recent achievements. You know why the remaining text is here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non tellus orci ac auctor augue mauris. 
        </p>
        <Grid>
          {
            achievements.map((s) => {
              return <TitleTextCard key={s.name} title={s.name} text={s.description}/>   
            })
          }
        </Grid>  
      </div>
      <footer>
        <div className="flex justify-center">
          <p>	&copy; 2023 ds12a &nbsp;</p>
          <IconLinks/>
        </div>
      </footer>
    </div>
  );
}

export default App;
