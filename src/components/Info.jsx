import Photo from "../images/photo.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

export default function Info() {
    return (
        <div className="info">
            <img src={Photo} alt="pfp"/>
            <h1>Andrii Sakhno</h1>
            <h3>FullStack Developer</h3>
            <nav>
                <FontAwesomeIcon icon={faGithub} className="github-logo"/>
            </nav>
        </div>
    );
}
