import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Project from './Project';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isNightMode: false,
      projects: {

      },
      projectDescriptions: [
        "A system for privately sharing content items among groups of people. Created using HTML, CSS/Bootstrap, and Flask in my Databases class.",
        "Web app that uses REST APIs and scrapes sneaker reseller websites for the prices of a shoe that a user inputs",
        "A website created for a side project done with my friends that makes videos for individuals to tell stories",
        "My personal website created using React.js and Gatsby.js"
      ]
    };

    this.toggleNightMode = this.toggleNightMode.bind(this)

  }  

  toggleNightMode() {
    this.setState({
      isNightMode: !this.state.isNightMode
    }, console.log(this.state.isNightMode))
  }
  
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Philip Jung</title>
        </Helmet>
        {!this.state.isNightMode ? 
        <div className="landingContainer">
          <div className="backgroundColor"></div>
          <div className="navbar">
            <div>
              <svg className="logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 792">
              <path d="M312.5,246.8h212.3v333.7c0,0,6.4,105.3-106.1,105.3S306.3,573.5,306.3,573.5h37.5c0,0,8.5,70.4,70.4,70.4
                s64.7-64.7,64.7-64.7V296.9H313L312.5,246.8z"/>
              <path d="M67.7,584.4l-1-430.9l157.7,0.6c0,0,99.1,3,98,118.4s-103.9,114-103.9,114c-35.5,0.5-70.9,1-106.4,1.5
                c-1,65.6-2,131.2-2.9,196.8 M117.5,190v153.4H210c0,0,73.6,1,73.6-73.6s-80-80-80-80L117.5,190z"/>
              </svg>
            </div>
            <div className="navButtons">
              <div><a href="#projectsSection" className="navbarLink">Projects</a></div>
              <div><a href = "mailto: philip.jung.98@gmail.com" className="navbarLink">Contact</a></div>
              <div onClick={this.toggleNightMode}><img className="moon logoLink" src="moon.svg"/></div>
            </div>
          </div>
          <div className="body">
            <div className="name">Philip Jung</div>
            <div className="title"><div>Full Stack Developer / UX Engineer</div></div>
            <a className="aboutMe" href="#aboutMe">About Me</a>
          </div>
          <div className="scrollIndicator">
            <div>
                <span className="arrow1"></span>
                <span className="arrow2"></span>
                <span className="arrow3"></span>
            </div>
          </div>
          <div className="sidebar">
            <a href="https://github.com/pjung16" target="_blank"><img src="github-logo.svg" className="githubLogo logoLink"/></a>
            <a href="https://www.linkedin.com/in/philip-jung-063687135/" target="_blank"><img src="linkedin-logo.svg" className="linkedinLogo logoLink"/></a>
            <a href="/Jung, Philip - Resume.pdf" target="_blank"><img src="resume.svg" className="resumeLogo logoLink"/></a>
          </div>
        </div> 
        :
        <div className="landingContainer">
          <div className="backgroundColorNight"></div>
          <div className="navbar">
            <div>
              <svg className="logoNight" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 792">
              <path d="M312.5,246.8h212.3v333.7c0,0,6.4,105.3-106.1,105.3S306.3,573.5,306.3,573.5h37.5c0,0,8.5,70.4,70.4,70.4
                s64.7-64.7,64.7-64.7V296.9H313L312.5,246.8z"/>
              <path d="M67.7,584.4l-1-430.9l157.7,0.6c0,0,99.1,3,98,118.4s-103.9,114-103.9,114c-35.5,0.5-70.9,1-106.4,1.5
                c-1,65.6-2,131.2-2.9,196.8 M117.5,190v153.4H210c0,0,73.6,1,73.6-73.6s-80-80-80-80L117.5,190z"/>
              </svg>
            </div>
            <div className="navButtons">
              <div><a href="#projectsSection" className="navbarLinkNight">Projects</a></div>
              <div><a href = "mailto: philip.jung.98@gmail.com" className="navbarLinkNight">Contact</a></div>
              <div onClick={this.toggleNightMode}><img className="moon logoLink" src="moon-white.svg"/></div>
            </div>
          </div>
          <div className="body">
            <div className="nameNight">Philip Jung</div>
            <div className="titleNight">Full Stack Developer / UX Engineer</div>
            <a className="aboutMe" href="#aboutMe">About Me</a>
          </div>
          <div className="scrollIndicator">
            <div>
                <span className="arrow1Night"></span>
                <span className="arrow2Night"></span>
                <span className="arrow3Night"></span>
            </div>
          </div>
          <div className="sidebar">
            <a href="https://github.com/pjung16" target="_blank"><img src="github-white.svg" className="githubLogo logoLink"/></a>
            <a href="https://www.linkedin.com/in/philip-jung-063687135/" target="_blank"><img src="linkedin-white.svg" className="linkedinLogo logoLink"/></a>
            <a href="/Jung, Philip - Resume.pdf" target="_blank"><img src="resume-white.svg" className="resumeLogo logoLink"/></a>
          </div>
        </div>
        }
        <div className="aboutContainer" name="aboutMe">
          <div className="gradientBlock">
            <div className="gradientContent">
              <div className="gradientTitle">
              Hi, I’m Philip!
              </div>
              <p className="gradientDesc">
              I am an aspiring full-stack engineer and UX engineer studying Computer Science at NYU. As a developer, I like to bring my ideas to life by making fun products. As a designer, I enjoy experimenting with simple, yet purposeful designs.
              </p>
            </div>
          </div>
          <img className="me" src="pj.jpg" />
        </div>
        <div className="projectsContainer" name="projectsSection">
          <div className="projectsTitle">Projects</div>
          <div className="projects">
            <div className="projectsGrid">
              <Project projectName="PriCoSha" link="https://github.com/pjung16/PriCoSha" desc={this.state.projectDescriptions[0]} />
              <Project projectName="Heatcheck" link="https://github.com/pjung16/heatcheck" desc={this.state.projectDescriptions[1]} />
              <Project projectName="Wonvision" link="https://github.com/pjung16/wonvision" desc={this.state.projectDescriptions[2]} />
              <Project projectName="This Website" link="https://github.com/pjung16/pjung16.github.io" desc={this.state.projectDescriptions[3]} />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="gradientBlockFooter">
            <div className="footerContainer">
              <div className="credits">
                <div>Made by</div>
                <svg className="logoFooter" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 792">
                  <path d="M312.5,246.8h212.3v333.7c0,0,6.4,105.3-106.1,105.3S306.3,573.5,306.3,573.5h37.5c0,0,8.5,70.4,70.4,70.4
                    s64.7-64.7,64.7-64.7V296.9H313L312.5,246.8z"/>
                  <path d="M67.7,584.4l-1-430.9l157.7,0.6c0,0,99.1,3,98,118.4s-103.9,114-103.9,114c-35.5,0.5-70.9,1-106.4,1.5
                    c-1,65.6-2,131.2-2.9,196.8 M117.5,190v153.4H210c0,0,73.6,1,73.6-73.6s-80-80-80-80L117.5,190z"/>
                </svg>
              </div>
              <div className="copyright">© Est. 2019</div>
              <div className="footerIcons">
                <a href="https://github.com/pjung16" target="_blank"><img src="github-white.svg" className="githubLogo logoLink"/></a>
                <a href="https://www.linkedin.com/in/philip-jung-063687135/" target="_blank"><img src="linkedin-white.svg" className="linkedinLogo logoLink"/></a>
                <a href="mailto: philip.jung.98@gmail.com" target="_blank"><img src="email-icon.svg" className="resumeLogo logoLink"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;