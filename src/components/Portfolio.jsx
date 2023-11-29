import Photo1 from '../images/weather-app.png';
import Photo2 from '../images/rps-app.png';
import {handleImageClick} from '../utils/utils.js';

export default function Portfolio() {

    return (
        <div className="portfolio-container">
            <div className="portfolio-item">
                <img src={Photo1} alt="Project 1" className="rounded-photo"
                     onClick={() => handleImageClick('https://sonn3r.github.io/js-weather-app/')}/>
                <p>Weather App</p>
            </div>
            <div className="portfolio-item">
                <img src={Photo2} alt="Project 2" className="rounded-photo"
                     onClick={() => handleImageClick('https://sonn3r.github.io/js-rock-paper-scissors/')}/>
                <p>Rock Paper Scissors</p>
            </div>
        </div>
    );
}