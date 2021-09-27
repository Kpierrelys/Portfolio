import './index.css'

function App() {
  return (
    <div>
      <div>
        <div className="w3-content w3-margin-top" style={{maxWidth: "1400px"}}>
          
          <div className="w3-row-padding">
            
            <div className="w3-third">
              
              <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">
                  <img src="/images/headshot.jpg" style={{width: "100%"}} alt="Avatar" />
                  <div className="w3-display-bottomleft w3-container w3-text-black">
                  <h2 className='w3-text-white'>Kerry Pierre-Lys</h2>
                  </div>
                </div>
                <div className="w3-container">
                  <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-blue"></i>Software Engineer</p>
                  <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue"></i>Lawrenceville, GA</p>
                  <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-blue"></i>kpierrelys.kp@gmail.com</p>
                  <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-blue"></i>404-358-2152</p>
                  <hr/>
                    
                  <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-blue"></i>Skills</b></p>
                  <p>Javascript (NodeJS, ReactJS, Redux, jQuery)</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-blue" style={{width: "100%"}}>100%</div>
                  </div>
                  <p>SQL (MongoDB, NoSQL)</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-blue" style={{width: "100%"}}>100%</div>
                  </div>
                  <p>HTML5/CSS</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-blue" style={{width: "100%"}}>100%</div>
                  </div>
                  <p>AJAX</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-blue" style={{width: "100%"}}>100%</div>
                  </div>
                  <p>Git</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-blue" style={{width: "100%"}}>100%</div>
                  </div>
                  <br/>
                </div>
              </div><br/>
              
            </div>
              
            <div className="w3-twothird">
              
              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-blue"></i>Projects</h2>
                <div className="w3-container">
                  <a href='http://shotbykerry.herokuapp.com/' alt='Photography website' target="_blank" rel='noreferrer'><h5 className="w3-opacity"><b>Photography page<i class="fab fa-react"></i></b></h5></a>
                  <h6 className="w3-text-blue"><i className="far fa-calendar-alt fa-fw w3-margin-right"></i>Sep 2021</h6>
                  <ul>
                    <li>
                      Built a full-stack photography web app that allow users to look through my  portfolio and send me personal emails for booking
                    </li>
                    <li>
                      Connected Node.js server to my GMail account by using OAuth2 in addition with  using the React framework. Utilized the Node.js module: Nodemailer which allows users to send messages directly to my email
                    </li>
                    <li>
                      Implemented a pagination feature that allow users to look through my portfolio for better user experience. Also, Utilized React tools and HTML/CSS for better user experience and page navigation and deployed project using the Heroku CLI
                    </li>
                  </ul>
                  <hr/>
                </div>
                <div className="w3-container">
                <a href='https://travel-with-kerry.herokuapp.com/' alt='Popular Venues Search Engine Website' target="_blank" rel='noreferrer'><h5 className="w3-opacity"><b>Popular Venues Search Engine<i class="fab fa-react"></i></b></h5></a>
                  <h6 className="w3-text-blue"><i className="far fa-calendar-alt fa-fw w3-margin-right"></i>Jun 2021</h6>
                  <ul>
                    <li>
                      Used React to develop a search engine where users can look up popular venues along with the current weather in their area by typing in their city
                    </li>
                    <li>
                      Integrated with the Weather api along with the FourSquare api to provide current weather and popular venues
                    </li>
                    <li>
                      Leveraged my knowledge of React and Javascript by using components and other features
                    </li>
                  </ul>
                  <hr/>
                </div>
                <div className="w3-container">
                <a href='https://todo-cache.herokuapp.com/' alt='Todo app Website' target="_blank" rel='noreferrer'><h5 className="w3-opacity"><b>Todo App<i class="fab fa-react"></i></b></h5></a>
                  <h6 className="w3-text-blue"><i className="far fa-calendar-alt fa-fw w3-margin-right"></i>Jun 2021</h6>
                  <ul>
                    <li>
                     Provide users with the ability to organize their list of to do’s using React
                    </li>
                    <li>
                      Implemented a cache solution so users don’t lose their list of tasks when the page is refreshed, which also improves internal operating efficiency. I used the browser's local storage to save the user's input
                    </li>
                    <li>
                      Utilized React tools like useRef and useEffect features for easier usability for visual impaired users
                    </li>
                  </ul>
                  <br/>
                </div>
                <div className="w3-container">
                <a href='http://redux-recipes.herokuapp.com/' alt='Todo app Website' target="_blank" rel='noreferrer'><h5 className="w3-opacity"><b>Recipe and Nutrition Provider<i class="fab fa-react"></i></b></h5></a>
                  <h6 className="w3-text-blue"><i className="far fa-calendar-alt fa-fw w3-margin-right"></i>Sep 2021</h6>
                  <ul>
                    <li>
                      Provides users with the ability to input their daily desired calorie intake to get three recipes along with their nutritional information to meet the user's goals
                    </li>
                    <li>
                      Intergrated with spoonacular's api to provide users with links to recipes that meets their calorie intake goals
                    </li>
                    <li>
                      Utilized redux for app state management and consistent behavior
                    </li>
                  </ul>
                  <br/>
                </div>
              </div>              
            </div>
          </div>
          
        </div>
      </div>
      <footer className="w3-container w3-blue w3-center w3-margin-top">
        <p>Find me on the web</p>
        <a href='https://www.linkedin.com/in/kerry-pierre-lys-705a71180/' target="_blank" rel='noreferrer'><i class="fab fa-linkedin w3-hover-opacity"></i></a>
        <a href='https://github.com/Kpierrelys' target="_blank" rel='noreferrer'><i class="fab fa-github w3-hover-opacity"></i></a>
      </footer>
    </div>
  );
}

export default App;
