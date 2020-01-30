(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(33),i=t.n(l),r=t(7),c=t.n(r),o=t(147),m=t(154),d=t.n(m),g=(t(160),function(e){function a(a){var t;return(t=e.call(this,a)||this).state={hover:!1,showModal:!1},t.hoverOn=t.hoverOn.bind(i()(t)),t.hoverOff=t.hoverOff.bind(i()(t)),t.handleOpenModal=t.handleOpenModal.bind(i()(t)),t.handleCloseModal=t.handleCloseModal.bind(i()(t)),t}c()(a,e);var t=a.prototype;return t.handleOpenModal=function(){this.setState({showModal:!0})},t.handleCloseModal=function(){this.setState({showModal:!1})},t.hoverOn=function(){this.setState({hover:!0})},t.hoverOff=function(){this.setState({hover:!1})},t.render=function(){return s.a.createElement("div",null,s.a.createElement("button",{className:"projectSquare",onClick:this.handleOpenModal,onMouseEnter:this.hoverOn,onMouseLeave:this.hoverOff},this.state.hover?s.a.createElement("div",{className:"description"},this.props.desc):s.a.createElement("div",null,this.props.projectName)),s.a.createElement(d.a,{isOpen:this.state.showModal,contentLabel:"Minimal Modal Example"},s.a.createElement("button",{onClick:this.handleCloseModal},"Close Modal")))},a}(n.Component)),h=(t(161),function(e){function a(){var a;return(a=e.call(this)||this).state={isNightMode:!1,projects:{},projectDescriptions:["A system for privately sharing content items among groups of people. Created using HTML, CSS/Bootstrap, and Flask in my Databases class.","Web app that uses REST APIs and scrapes sneaker reseller websites for the prices of a shoe that a user inputs","A website created for a side project done with my friends that makes videos for individuals to tell stories","My personal website created using React.js and Gatsby.js"]},a.toggleNightMode=a.toggleNightMode.bind(i()(a)),a}c()(a,e);var t=a.prototype;return t.toggleNightMode=function(){this.setState({isNightMode:!this.state.isNightMode},console.log(this.state.isNightMode))},t.render=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(o.Helmet,null,s.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),s.a.createElement("title",null,"Philip Jung")),this.state.isNightMode?s.a.createElement("div",{className:"landingContainer"},s.a.createElement("div",{className:"backgroundColorNight"}),s.a.createElement("div",{className:"navbar"},s.a.createElement("div",null,s.a.createElement("svg",{className:"logoNight",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 612 792"},s.a.createElement("path",{d:"M312.5,246.8h212.3v333.7c0,0,6.4,105.3-106.1,105.3S306.3,573.5,306.3,573.5h37.5c0,0,8.5,70.4,70.4,70.4 s64.7-64.7,64.7-64.7V296.9H313L312.5,246.8z"}),s.a.createElement("path",{d:"M67.7,584.4l-1-430.9l157.7,0.6c0,0,99.1,3,98,118.4s-103.9,114-103.9,114c-35.5,0.5-70.9,1-106.4,1.5 c-1,65.6-2,131.2-2.9,196.8 M117.5,190v153.4H210c0,0,73.6,1,73.6-73.6s-80-80-80-80L117.5,190z"}))),s.a.createElement("div",{className:"navButtons"},s.a.createElement("div",null,s.a.createElement("a",{href:"#projectsSection",className:"navbarLinkNight"},"Projects")),s.a.createElement("div",null,s.a.createElement("a",{href:"mailto: philip.jung.98@gmail.com",className:"navbarLinkNight"},"Contact")),s.a.createElement("div",{onClick:this.toggleNightMode},s.a.createElement("img",{className:"moon logoLink",src:"moon-white.svg"})))),s.a.createElement("div",{className:"body"},s.a.createElement("div",{className:"nameNight"},"Philip Jung"),s.a.createElement("div",{className:"titleNight"},"Full Stack Developer / UX Engineer"),s.a.createElement("a",{className:"aboutMe",href:"#aboutMe"},"About Me")),s.a.createElement("div",{className:"scrollIndicator"},s.a.createElement("div",null,s.a.createElement("span",{className:"arrow1Night"}),s.a.createElement("span",{className:"arrow2Night"}),s.a.createElement("span",{className:"arrow3Night"}))),s.a.createElement("div",{className:"sidebar"},s.a.createElement("a",{href:"https://github.com/pjung16",target:"_blank"},s.a.createElement("img",{src:"github-white.svg",className:"githubLogo logoLink"})),s.a.createElement("a",{href:"https://www.linkedin.com/in/philip-jung-063687135/",target:"_blank"},s.a.createElement("img",{src:"linkedin-white.svg",className:"linkedinLogo logoLink"})),s.a.createElement("a",{href:"/Jung, Philip - Resume.pdf",target:"_blank"},s.a.createElement("img",{src:"resume-white.svg",className:"resumeLogo logoLink"})))):s.a.createElement("div",{className:"landingContainer"},s.a.createElement("div",{className:"backgroundColor"}),s.a.createElement("div",{className:"navbar"},s.a.createElement("div",null,s.a.createElement("svg",{className:"logo",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 612 792"},s.a.createElement("path",{d:"M312.5,246.8h212.3v333.7c0,0,6.4,105.3-106.1,105.3S306.3,573.5,306.3,573.5h37.5c0,0,8.5,70.4,70.4,70.4 s64.7-64.7,64.7-64.7V296.9H313L312.5,246.8z"}),s.a.createElement("path",{d:"M67.7,584.4l-1-430.9l157.7,0.6c0,0,99.1,3,98,118.4s-103.9,114-103.9,114c-35.5,0.5-70.9,1-106.4,1.5 c-1,65.6-2,131.2-2.9,196.8 M117.5,190v153.4H210c0,0,73.6,1,73.6-73.6s-80-80-80-80L117.5,190z"}))),s.a.createElement("div",{className:"navButtons"},s.a.createElement("div",null,s.a.createElement("a",{href:"#projectsSection",className:"navbarLink"},"Projects")),s.a.createElement("div",null,s.a.createElement("a",{href:"mailto: philip.jung.98@gmail.com",className:"navbarLink"},"Contact")),s.a.createElement("div",{onClick:this.toggleNightMode},s.a.createElement("img",{className:"moon logoLink",src:"moon.svg"})))),s.a.createElement("div",{className:"body"},s.a.createElement("div",{className:"name"},"Philip Jung"),s.a.createElement("div",{className:"title"},s.a.createElement("div",null,"Full Stack Developer / UX Engineer")),s.a.createElement("a",{className:"aboutMe",href:"#aboutMe"},"About Me")),s.a.createElement("div",{className:"scrollIndicator"},s.a.createElement("div",null,s.a.createElement("span",{className:"arrow1"}),s.a.createElement("span",{className:"arrow2"}),s.a.createElement("span",{className:"arrow3"}))),s.a.createElement("div",{className:"sidebar"},s.a.createElement("a",{href:"https://github.com/pjung16",target:"_blank"},s.a.createElement("img",{src:"github-logo.svg",className:"githubLogo logoLink"})),s.a.createElement("a",{href:"https://www.linkedin.com/in/philip-jung-063687135/",target:"_blank"},s.a.createElement("img",{src:"linkedin-logo.svg",className:"linkedinLogo logoLink"})),s.a.createElement("a",{href:"/Jung, Philip - Resume.pdf",target:"_blank"},s.a.createElement("img",{src:"resume.svg",className:"resumeLogo logoLink"})))),s.a.createElement("div",{className:"aboutContainer",name:"aboutMe"},s.a.createElement("div",{className:"gradientBlock"},s.a.createElement("div",{className:"gradientContent"},s.a.createElement("div",{className:"gradientTitle"},"Hi, I’m Philip!"),s.a.createElement("p",{className:"gradientDesc"},"I am an aspiring full-stack engineer and UX engineer studying Computer Science at NYU. As a developer, I like to bring my ideas to life by making fun products. As a designer, I enjoy experimenting with simple, yet purposeful designs."))),s.a.createElement("img",{className:"me",src:"pj.jpg"})),s.a.createElement("div",{className:"projectsContainer",name:"projectsSection"},s.a.createElement("div",{className:"projectsTitle"},"Projects"),s.a.createElement("div",{className:"projects"},s.a.createElement("div",{className:"projectsGrid"},s.a.createElement(g,{projectName:"PriCoSha",desc:this.state.projectDescriptions[0]}),s.a.createElement(g,{projectName:"Heatcheck",desc:this.state.projectDescriptions[1]}),s.a.createElement(g,{projectName:"Wonvision",desc:this.state.projectDescriptions[2]}),s.a.createElement(g,{projectName:"This Website",desc:this.state.projectDescriptions[3]})))),s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"gradientBlockFooter"},s.a.createElement("div",{className:"footerContainer"},s.a.createElement("div",{className:"credits"},s.a.createElement("div",null,"Made by"),s.a.createElement("svg",{className:"logoFooter",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 612 792"},s.a.createElement("path",{d:"M312.5,246.8h212.3v333.7c0,0,6.4,105.3-106.1,105.3S306.3,573.5,306.3,573.5h37.5c0,0,8.5,70.4,70.4,70.4 s64.7-64.7,64.7-64.7V296.9H313L312.5,246.8z"}),s.a.createElement("path",{d:"M67.7,584.4l-1-430.9l157.7,0.6c0,0,99.1,3,98,118.4s-103.9,114-103.9,114c-35.5,0.5-70.9,1-106.4,1.5 c-1,65.6-2,131.2-2.9,196.8 M117.5,190v153.4H210c0,0,73.6,1,73.6-73.6s-80-80-80-80L117.5,190z"}))),s.a.createElement("div",{className:"copyright"},"© Est. 2019"),s.a.createElement("div",{className:"footerIcons"},s.a.createElement("a",{href:"https://github.com/pjung16",target:"_blank"},s.a.createElement("img",{src:"github-white.svg",className:"githubLogo logoLink"})),s.a.createElement("a",{href:"https://www.linkedin.com/in/philip-jung-063687135/",target:"_blank"},s.a.createElement("img",{src:"linkedin-white.svg",className:"linkedinLogo logoLink"})),s.a.createElement("a",{href:"mailto: philip.jung.98@gmail.com",target:"_blank"},s.a.createElement("img",{src:"email-icon.svg",className:"resumeLogo logoLink"})))))))},a}(n.Component));a.default=function(){return s.a.createElement("div",null,s.a.createElement(h,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-0fb21747d644899aaf35.js.map