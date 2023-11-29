import Photo from "../images/photo.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {handleImageClick} from '../utils/utils.js';

export default function Info() {

    return (
        <div className="info">
            <img src={Photo} alt="pfp"/>
            <h1>Andrii Sakhno</h1>
            <h3>FullStack Developer</h3>
            <nav>
                <FontAwesomeIcon icon={faGithub} className="github-logo"
                                 onClick={() => handleImageClick('https://github.com/sonn3r')}/>
            </nav>
        </div>
    );
}
