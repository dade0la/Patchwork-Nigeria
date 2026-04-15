import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  

  return (
    <>
      
        





      <section class="hero" id="home">

        <div id="patchwork">
            <img src="patchwork.png"></img>
            </div>


        <div class="menu-trigger">
          <div class="bars">
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <p>MENU</p>
          
          <div class="menu">
            <ul>
              <li><p>Home</p></li>
              <li><p>Work</p></li>
              <li><p>Sales & Installation</p></li>
              <li><p>Contact</p></li>
              <li><p>Stores</p></li>
            </ul>
          </div>
        </div>

        <a class="dribbble-link" href="https://dribbble.com/shots/5290735-ARKK-Menu-and-Category-page" target="_blank">
  <i class="fab fa-dribbble"></i>
</a>




        <div class="hero-content">
          
            <h1>World Class Audio</h1>
            <p>A global audio rental and sales partner for the touring and live events industry</p>
        </div>
    </section>


      













    <section class="recent-work" id="work">
        <div class="section-header">
            <h2>Recent Work</h2>
            <a href="#" class="btn-see-all">See All</a>
        </div>
        
        
        
        











        
        <div class="work-grid">





          
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
      
                  <h3>Burna Boy</h3>
                  <p>World Wide</p>
                </div>
              <div class="card-back1"></div>
            </div>
          </div>


          <div class="card">
              <div class="card-inner">
                <div class="card-front">
      
                  <h3>Tiwa Savage</h3>

                </div>
              <div class="card-back3"></div>
            </div>
          </div>



            <div class="card">
              <div class="card-inner">
                <div class="card-front">
      
                  <h3>Davido</h3>

                </div>
              <div class="card-back2"></div>
            </div>
          </div>


          
        
        
        
        
        
        
        </div>
    
    
    
    





      <div class="marquee">
        <div class="marquee-track">

        <img src="shure.png"></img>
        <img src="waves.png"></img>
        <img src="yamaha.png"></img>
        <img src="digico.png"></img>
        <img src="neve.png"></img>
        <img src="audiop.png"></img>
        <img src="ssl.png"></img>

        <img src="shure.png"></img>
        <img src="waves.png"></img>
        <img src="yamaha.png"></img>
        <img src="digico.png"></img>
        <img src="neve.png"></img>
        <img src="audiop.png"></img>
        <img src="ssl.png"></img>



        </div>
      </div>








    
    
    
    </section>

    <section class="video-section">
        <h2>Our Home</h2>
        <div class="video-container">
            <div class="video-placeholder">
                <video width="100%" height="100%" autoPlay muted loop> 
                  <source src="patchwork.webm"></source>
                </video>
            </div>
        </div>
    </section>

    <footer>
        <div class="footer-content">
            <ul class="footer-links">
                <li><a href="#work">Work</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#sales">Sales</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#privacy">Privacy</a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Patchwork Nigeria | Web Design layout recreation</p>
        </div>
    </footer>




      

      
    </>
  )
}

export default App
