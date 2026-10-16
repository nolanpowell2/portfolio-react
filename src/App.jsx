import backgroundImage from '../pics/background.png'
import meImage from '../pics/me.jpg'
import combatIqImage from '../pics/combat-iq.png'
import websiteImage from '../pics/website.png'

import pythonLogo from '../pics/skills/python.webp'
import javaLogo from '../pics/skills/java.png'
import htmlLogo from '../pics/skills/html.png'
import cssLogo from '../pics/skills/css.png'
import numpyLogo from '../pics/skills/numpy.png'
import yoloLogo from '../pics/skills/yolo.png'
import opencvLogo from '../pics/skills/opencv.svg'
import mediapipeLogo from '../pics/skills/mediapipe.png'
import gitLogo from '../pics/skills/git.webp'
import githubLogo from '../pics/skills/github.webp'
import vscodeLogo from '../pics/skills/vscode.webp'
import colabLogo from '../pics/skills/colab.png'
import jupyterLogo from '../pics/skills/jupyter.webp'
import linkedinLogo from '../pics/linkedin.webp'
import emailIcon from '../pics/email.png'
import phoneIcon from '../pics/phone.png'

const navItems = [
  { href: '#about-container', label: 'About' },
  { href: '#projects-container', label: 'Projects' },
  { href: '#practice-container', label: 'Practice' },
  { href: '#skills-container', label: 'Skills' },
  { href: '#contact-container', label: 'Contact' },
]

const projects = [
  {
    id: 'combat-iq-container',
    href: 'https://github.com/nolanpowell2/combat-iq',
    image: combatIqImage,
    title: 'CombatIQ',
    subtitle: 'Personal Project',
    description: 'A computer vision powered AI MMA stike and analytics tracker',
  },
  {
    id: 'portfolio-container',
    href: 'https://github.com/nolanpowell2/Portfolio',
    image: websiteImage,
    title: 'This Site!',
    subtitle: 'Personal Project',
    description: 'A webpage to showcase my projects, skills, and other personal information',
  },
]

const skillGroups = [
  {
    title: 'Languages',
    items: [
      { label: 'Python', icon: pythonLogo },
      { label: 'Java', icon: javaLogo },
      { label: 'HTML', icon: htmlLogo },
      { label: 'CSS', icon: cssLogo },
    ],
  },
  {
    title: 'Libraries and Packages',
    items: [
      { label: 'NumPy', icon: numpyLogo },
      { label: 'Yolo26', icon: yoloLogo },
      { label: 'OpenCV', icon: opencvLogo },
      { label: 'MediaPipe', icon: mediapipeLogo },
    ],
  },
  {
    title: 'Tools',
    items: [
      { label: 'git', icon: gitLogo },
      { label: 'GitHub', icon: githubLogo },
      { label: 'VS Code', icon: vscodeLogo },
      { label: 'Colab', icon: colabLogo },
      { label: 'Jupyter', icon: jupyterLogo },
    ],
  },
]

const contactItems = [
  { href: 'https://github.com/nolanpowell2', label: 'GitHub', icon: githubLogo, isEmail: false },
  { href: 'https://www.linkedin.com/in/nolan-powell-33b814435/', label: 'Linked in', icon: linkedinLogo, isEmail: false },
  { href: 'mailto:nolanhpowell.2@gmail.com', label: '@nolanhpowell.2@gmail.com', icon: emailIcon, isEmail: true },
  { href: 'tel:5153227677', label: '515-322-7677', icon: phoneIcon, isEmail: true },
]

function App() {
  return (
    <div className="page-shell">
      <div id="background">
        <img src={backgroundImage} alt="" />
      </div>

      <header id="header-container" className="container">
        <div id="header" className="container">
          <div id="title-container" className="container">
            <h1 id="navbar-name" className="name">NP</h1>
          </div>

          <nav id="navbar-container" className="container">
            <ul id="navbar" className="container">
              {navItems.map((item) => (
                <li key={item.href} className="navbar-elems">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home-container" className="container parent">
          <div id="home-image-container" className="container children">
            <img id="home-image" src={meImage} alt="me" />
          </div>

          <div id="home-text-container" className="container children">
            <div>
              <p id="home-hello">Hello!</p>
              <p id="home-name" className="name">
                My name is <span id="name">Nolan Powell</span>
              </p>
              <p id="home-description" className="sub-text">
                Computer Science Student at the University of Northern Iowa
              </p>
            </div>
          </div>
        </section>

        <section id="about-container" className="container">
          <div className="subheading-container container">
            <h2>About</h2>
            <hr />
          </div>
          <p id="about-text" className="box">
            I am a first year full-ride computer science student at the University of Northern Iowa based out of Cedar Falls and Ankeny.
            I am currently seeking internships and other opportunities for experience.
            Some of my other hobbies include spending time outdoors by hunting, fishing, foraging, etc.
            I am also a big sports fan, specifically baseball, football, and MMA.
            I am hardworking and a very quick learner. I am open to all opportunities, so please feel free to reach out!
          </p>
        </section>

        <section id="projects-container" className="container">
          <div className="subheading-container container">
            <h2>Projects</h2>
            <hr />
          </div>

          <div id="project-examples-container" className="container">
            {projects.map((project) => (
              <a
                key={project.id}
                id={project.id}
                className="project-example-container container box"
                target="_blank"
                rel="noreferrer"
                href={project.href}
              >
                <img className="project-image" src={project.image} alt={project.title} />
                <h3>
                  {project.title} <span className="link-symbol">↗</span>
                </h3>
                <p>{project.subtitle}</p>
                <p className="sub-text">{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="practice-container" className="container">
          <div className="subheading-container container">
            <h2>Practice</h2>
            <hr />
          </div>

          <a href="https://github.com/nolanpowell2" target="_blank" rel="noreferrer">
            <div id="github" className="container box">
              <h3>
                GitHub <span className="link-symbol">↗</span>
              </h3>
              <div id="commit-chart-container">
                <img
                  id="commit-chart"
                  src="https://ghchart.rshah.org/00FF00/nolanpowell2"
                  alt="nolanpowell2's Github chart"
                />
              </div>
            </div>
          </a>
        </section>

        <section id="skills-container" className="container">
          <div className="subheading-container container">
            <h2>Skills</h2>
            <hr />
          </div>

          {skillGroups.map((group) => (
            <div key={group.title} className="skill-container container">
              <h3>{group.title}</h3>
              <div className="skills-icons-container container">
                {group.items.map((item) => (
                  <div key={item.label} className="skill-icon-container container box">
                    <img className="icon" src={item.icon} alt={`${item.label} logo`} />
                    <h4>{item.label}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="contact-container" className="container">
          <div className="subheading-container container">
            <h2>Contact</h2>
            <hr />
          </div>

          <div id="contact-content-container" className="container">
            <h3>Let's work together!</h3>

            {contactItems.map((item) => (
              <a
                key={item.label}
                className="contact-icon container"
                href={item.href}
                target={item.isEmail ? undefined : '_blank'}
                rel={item.isEmail ? undefined : 'noreferrer'}
              >
                <img src={item.icon} alt={`${item.label} icon`} />
                {item.isEmail ? (
                  <p>{item.label}</p>
                ) : (
                  <p>
                    {item.label} <span className="link-symbol">↗</span>
                  </p>
                )}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div>
          <p>© 2026 Nolan Powell. All right reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
