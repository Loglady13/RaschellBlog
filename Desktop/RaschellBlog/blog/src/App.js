import './App.css';
import ExternalLink from './ExternalLink';

function App() {
  return (
    <div className="App">
      <div className="Header">
      <div class="main-container">
            <div class="logo-container">
                <a href="#"><strong>Raschell</strong> Jarquin</a>
            </div>
            <nav>
                <ul>
                    <li><a href="#inicio">Homepage</a></li>
                    <li><a href="#who">About me</a></li>
                    <li><a href="#proyectos">Projects</a></li>
                </ul>
            </nav>
        </div>
        </div>
        <section id="inicio">
            <div class="txt-container main-container">
                <div class="txt-intro">
                    <h1 class="main-title">Welcome to my blog, I´m Raschell!</h1>
                    <p>In this blog you can find some information about my training and experience in the academic and work field.</p>
                </div>
                <div class="btn">
                    <a href="RaschellCV.pdf" target="_blank">Download CV</a>
                </div>
            </div>    
        </section>
        <section id="who">
            <div class="contenido-who main-container">
                <div class="img-who">
                    <img src="raschell.jpg" alt="Raschell"></img>
                </div>
                <h2 class="main-title">About me</h2>
                <div class="texto-who">
                    <p>I am a Computer Engineering student at the Technological Institute of Costa Rica, I currently have knowledge in various areas, which I can highlight both frontend and backend web development, 
                      I have carried out various projects with various languages ​​such as JavaScript, TypeScript, Java, Python, C++, .NET, among others. In addition to experience working in frameworks such as Angular and React.</p>
                    <p></p>

                </div>
            </div>
        </section>
        <section id="proyectos">
            <div class="contenedor-titulo">
                <h2 class="main-title">Learn more about me</h2>

            </div>
            <div class="contenedor-cards main-container">
                <div class="cards">
                    <h4>01</h4>
                    <ExternalLink url="http://linkedin.com/in/raschell-jarqu%C3%ADn-quesada-64a57726b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    Linkedln
                    </ExternalLink>
                    <p>In this section you can access my LinkedIn profile where you can learn more about my experience and skills</p>

                </div>
                <div class="cards">
                    <h4>02</h4>
                    <ExternalLink url="https://github.com/Loglady13">
                    Github Repositories
                    </ExternalLink>
                    <p>In this section you can access my GitHub repository, where you can see my work in more depth</p>

                </div>
                
            </div>
        </section>
      <section id="footer">
        <div class="social-media">
            <div class="social-media-box">
                <a href="https://www.facebook.com/raschell.jarquinquesada">
                  <img src='facebook.png' alt='icono de facebook'></img>
                </a>
            </div>
            <div class="social-media-box">
                <a href="https://www.instagram.com/loglady13_/">
                    <img src='instagram.png' alt='icono de instagram'></img>
                </a>
            </div>
        </div>
        <p>
            Todos los derechos reservados &copy; <strong>Raschell Jarquin</strong>
        </p>
    </section>




    </div>
  );
}

export default App;
