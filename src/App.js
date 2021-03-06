import React , {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from "./JScomponents/home"
import WebProject from './JScomponents/webProject';
import AppProject from './JScomponents/appProject';
import GraphicProject from './JScomponents/graphicProject';
import OurCompany from './JScomponents/ourCompany';
import LocationDiv from './JScomponents/locationDiv';
import Location from './JScomponents/location';
import ContactUs from './JScomponents/contactUs';

function App() {

  const [state, setState] = useState(()=> ({
    vh: window.innerHeight,
    navClass: "headerNav"
  }))

  useEffect(()=>{

    console.log("123")

    window.addEventListener("resize", (e)=>{
        setState(ps => ({...ps, vh: window.innerHeight}))

            console.log(window.innerHeight)
    })


    // let timeline = gsap.timeline({defaults:{duration:1}})
    // timeline
    // .from("header", {y:"-100%", opacity: 0})
    // .from(".footer", {x:"100%"},"<")

}, [])


const burger = (e) => {
  

  if (state.navClass === "headerNav active"){
    console.log(state.navClass)

    return setState(ps => ({...ps, navClass: "headerNav"}))
  }

  else{
    console.log(state.navClass)

    return setState(ps => ({...ps, navClass: "headerNav active"}))
  }

}



  return (
    <div className="App">
      <header className="App-header">

      <div className="App-secondaryHeader">

      <div className="burgerContainer">
        <Link to="/" ><img className="headerLogo" src="/assets/shared/desktop/logo-dark.png" /></Link>

        <div className="hamburger" onClick={burger}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>



      <nav className={state.navClass} >



        <ul>
          <Link className="header-links" to={"/"}>HOME</Link>
          <Link className="header-links" to={"/our-company"}>OUR COMPANY</Link>
          <Link className="header-links" to={"/contacts"}>CONTACT</Link>
        </ul>
      </nav>

      </div>



        
      </header>


      <Switch>
          <Route exact={true} path="/" render={()=>(
            <Home />
          )}  />

          <Route exact={true} path="/web-design-projects" render={() =>(
            <WebProject />
          )} />

          <Route exact={true} path="/app-design-projects" render={() =>(
            <AppProject />
            
            )}/>

            
          <Route exact={true} path="/graphic-design-projects" render={() =>(
            <GraphicProject />
            
            )}/>

            

          <Route exact={true} path="/our-company" render={() =>(
            <OurCompany />
            
            )}/>


          <Route exact={true} path="/contacts" render={() =>(
            <ContactUs />
            
            )}/>

         
    </Switch>
      



      <footer>

         <div className="abosoluteFooter">
          <div className="intro">
            <h1>Let's talk about your project</h1>
            <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
          </div>

          <a className="contactBtn" href="mailto:adanehenock@gmail.com" target="_blank">GET IN TOUCH</a>

        </div> 

        <div className="subFooter">

          <div className="footerDetails">
              <div className="footerLogoContainer">
              <img className="footerLogo" src="/assets/shared/desktop/logo-light.png" />
            </div>

            <nav className="footerNav">
              <ul>
                <Link className="footer-links" to={"/"}>OUR COMPANY</Link>
                <Link className="footer-links" to={"/"}>LOCATIONS</Link>
                <Link className="footer-links" to={"/"}>CONTACT</Link>
              </ul>
            </nav>
          </div>


          <div className="subSubFooter">
            <div className="footerLocations">
              <h5>Designo Central Office</h5>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            

            <div className="footerContacts">
              <h5>Contact Me (Central Office)</h5>
              <h5>P : <a href="tel:+44 07938888763" target="_blank">+44 07938888763</a></h5>
              <h5>M : <a href="mailto:adanehenock@gmail.com" target="_blank">adanehenock@gmail.com</a></h5>
            </div>


            <div className="footerSocials">

              <a className="socials-links" href="#" target="_blank">
              <img src="assets/shared/desktop/icon-facebook.svg"/>
              </a>

              <a className="socials-links" href="#" target="_blank">
              <img src="assets/shared/desktop/icon-youtube.svg"/>
              </a>

              <a className="socials-links" href="#" target="_blank">
              <img src="assets/shared/desktop/icon-twitter.svg"/>
              </a>

              <a className="socials-links" href="#" target="_blank">
              <img src="assets/shared/desktop/icon-pinterest.svg"/>
              </a>

              <a className="socials-links" href="#" target="_blank">
              <img src="assets/shared/desktop/icon-instagram.svg"/>
              </a>


            </div>
          </div>




        </div>
      </footer>
    </div>
  );
}

export default App;
