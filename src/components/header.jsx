import styles from '../styles/header.css'
import GithubLogo from '../img/github-icon.png';
import LinkedinLogo from '../img/Linkedin-Icon.png'

const Header = () => {
    return(
        <div className='header-container'>
            <div className='logo'></div>
            <p className='name'>Lu.</p>

            <div className="container-right">
                {/* <a href="https://github.com/"><img className="link-to-sites" src={GithubLogo} alt="Logo-GitHub"></img></a>
                <a href="https://github.com/"><img className="link-to-sites" src={LinkedinLogo} alt="Logo-Linkedin"></img></a> */}
                <a href="/">LinkedIn</a>
                <a href="https://github.com/">Github</a>
            </div>
        </div>
    );
}
 
export default Header;