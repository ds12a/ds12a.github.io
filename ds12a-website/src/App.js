import logo from './images/favicon.ico';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { SubtitleCard, SkillCard, AloneCard, Quotes, Accomplishments, Projects, GenericCard } from './CardLayouts.js'
import {progLangPct, libPct, quotes, accomplishments, projects} from './data.js'

AOS.init();

function App() {
  return (
    <div style={{ position: 'relative', overflow: "hidden" }}>

        <title>Website of ds12a</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={logo} type="image/x-icon" />
        <link href="https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/zephyr/bootstrap.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
        <div className="gradient">
          <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '90vh'}}>
            <div className="text-center">
              <h1 id="title" className="text-light display-1" data-aos="fade-right" data-aos-duration={1000}>
                Hi there!
              </h1>
              <p id="title_description" className="text-light lead" data-aos="fade-left" data-aos-duration={1000}>
                Welcome to my website!
              </p>
              <br />
              <br />
              <br />
              <div className="d-flex justify-content-center" data-aos="zoom-in-down" data-aos-easing="ease-in-linear" data-aos-duration={2000}>
                <p className="scroll text-light">Scroll Down</p>
                <div className="chevron" />
                <div className="chevron" />
                <div className="chevron" />
              </div>
            </div>
          </div>
        </div>
        <nav id="navigation" className="navbar bg-dark sticky-top navbar-expand-md navbar-dark nav-pills">
          <div className="container-fluid" style={{textAlign: 'center'}}>
            <a className="navbar-brand" href="#">
              <img src={logo} alt="DS12a" width={32} height={32} className="rounded-circle d-inline-block align-text-center" />
              12a
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbar">
              <nav className="nav nav-pills flex-fill">
                <a className="nav-link flex-fill text-light" href="#home"><i className="bi bi-house-door" /> Home</a>
                <a className="nav-link flex-fill text-light" href="#about_me"><i className="bi bi-person" /> About Me</a>
                <a className="nav-link flex-fill text-light" href="#accomplishments"><i className="bi bi-trophy" /> Accomplishments</a>
                <a className="nav-link flex-fill text-light" href="#projects"><i className="bi bi-book" /> Projects</a>
                <a className="nav-link flex-fill text-light" href="#quotes"><i className="bi bi-chat-square-quote" /> Famous Quotes</a>
              </nav>
            </div>
          </div>
        </nav>
        <br />
        <div className="container">
          <div data-aos="fade-right" id="home">
            <AloneCard title="Welcome" text={"Hi there! This is the website of ds12a. Information here is posted for ease of access or for fun! As you can see, this site is mostly meaningless. I have populated this site with meaningless text and with some slightly meaningful links.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Non tellus orci ac auctor augue mauris. Tempor nec feugiat nisl pretium fusce. Pellentesque pulvinar pellentesque habitant morbi tristique. Sodales ut etiam sit amet nisl purus in. Aliquam sem fringilla ut morbi tincidunt augue. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Lectus nulla at volutpat diam ut venenatis tellus in. Netus et malesuada fames ac turpis egestas maecenas pharetra. Maecenas ultricies mi eget mauris."}></AloneCard>
          </div>
          <div data-aos="fade-right" id="about_me">
            <AloneCard title="About Me" icon="bi bi-code-square" text={"I am _____ _____, a ______ at ____. Some things I enjoy include programming (specifically for Deep Learning/RL purposes) and problem-solving. I am an AMC 12 and USACO Silver competitor, though I hope to soon achieve Platinum. My CS skills are almost completely self-taught.\n\nHere are some additional things about me:"}></AloneCard>
          </div>
          <div data-aos="fade-right">
            <SubtitleCard title="My Skills" icon="bi-code-square" text="The following are some of the things I have explored and know about."></SubtitleCard>
          </div>
          <div data-aos="fade-down">
            <SkillCard title="Programming Languages" icon="bi bi-code" skillPct={progLangPct}></SkillCard>
          </div>
          <div data-aos="fade-down">
            <SkillCard title="Programming Libraries" icon="bi bi-file-earmark-code-fill" skillPct={libPct}></SkillCard>
          </div>
          <div data-aos="fade-right" id="accomplishments">
            <SubtitleCard title="Accomplishments" icon="bi bi-trophy-fill" text="The following are some of my recent achievements."></SubtitleCard>
          </div>
          <div data-aos="fade-down">
            <Accomplishments accomplishments={accomplishments}></Accomplishments>
          </div>
          <div data-aos="fade-right" id="projects">
            <SubtitleCard title="Projects" text="The following are some of my projects. These are posted here for easy access to them." icon="bi bi-tools"></SubtitleCard>
          </div>
          <div data-aos="fade-down">
            <Projects projects={projects}></Projects>
          </div>
          
          <div data-aos="fade-right" id="quotes">
            <SubtitleCard title="Some Not Very Famous Quotes" text=""></SubtitleCard>
          </div>
          <div data-aos="fade-down">
            <Quotes quotes={quotes}></Quotes>
          </div> 
        </div>
        <footer>
          <div data-aos="fade-up" className="container" id="bottom">
            <GenericCard text={"Built with the help of Jquery, Bootstrap 5, AOS, and React.js\n\nUses the Zephyr theme from Bootswatch.\n\nWebsite built by ds12a ©2022"}></GenericCard>
          </div>
        </footer>
        <br />
      </div>
  );
}

export default App;
