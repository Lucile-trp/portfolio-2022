import '../styles/projects.css'
const Projets = () => {
    return(
        <div className='project-section'>
             <div className='project-section-title'>
                <h1 >Projets</h1>
                <p>Plus de projets sur Github et Behance</p>
            </div>
                    
            <div className='project-card card-1'>
                <div className='project-card-img'></div>
                <p>Name project/Link to project</p>
            </div>
            <div className='project-card card-2'></div>
            <div className='project-card card-3'></div>
            <div className='project-card card-4'></div>
            <div className='project-card card-5'></div>
        </div>
    );
}
 
export default Projets;