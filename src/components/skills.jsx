import '../styles/skills.css'
const Skills = () => {
    return(
        <div className='skills-section'>
            <h1 className='skills-title'>Compétences <br/> transverses</h1>
            <div className='skills-column column-1'>
                <div className='skills-card'>
                    <p>React</p>
                </div>
                <div className='skills-card'>
                    <p>Next.js</p>
                </div>
                <div className='skills-card'>
                    <p>Node.js</p>
                </div>
                <div className='skills-card'>
                    <p>VBA</p>
                </div>
            </div>
            <div className='skills-column column-2'>
                <div className='skills-card'>
                    <p>Illustrator</p>
                </div>
                <div className='skills-card'>
                    <p>InDesign</p>
                </div>
                <div className='skills-card'>
                    <p>After Effect</p>
                </div>
                <div className='skills-card'>
                    <p>Glyphs</p>
                </div>
            </div>
            <div className='skills-column column-3'>
                <div className='skills-card'>
                        <p>Blender</p>
                    </div>
                    <div className='skills-card'>
                        <p>...</p>
                    </div>
                    <div className='skills-card'>
                        <p>...</p>
                    </div>
                    <div className='skills-card'>
                        <p>...</p>
                    </div>
            </div>
        
        </div>

    );
}
 
export default Skills;