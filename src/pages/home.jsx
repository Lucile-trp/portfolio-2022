import Header from '../components/header.jsx'
import '../styles/home.css'
import Projects from '../components/projects.jsx'
import Skills from '../components/skills.jsx'

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <section className='home-section'>
                    <div className="home-container">
                        <div className='left-element'>
                            <h1>Développeur informatique <br /> + Designer Graphique </h1>
                            <nav>
                                <a className="nav-items" href="#projects">Projets</a>
                                <a className="nav-items" href="#skills">Compétences</a>
                                <a className="nav-items" href="/">Expériences</a>
                                <a className="nav-items" href="/">Contacts</a>
                            </nav>
                        </div>
                        <div className='right-element'>
                            <div className='canvas'></div>

                        </div>
                    </div>
                </section>

                <section id="projects">
                   <Projects></Projects>
                </section>

                <section id='skills'>
                    <Skills></Skills>
                    
                </section>
            </main>
        </div>
    );
}

export default HomePage