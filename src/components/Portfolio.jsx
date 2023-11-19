import Photo1 from '../images/weather-app.png';
import Photo2 from '../images/rps-app.png';

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <div className="portfolio-item">
                <img src={Photo1} alt="Project 1" className="rounded-photo" />
                <p>Weather App</p>
            </div>
            <div className="portfolio-item">
                <img src={Photo2} alt="Project 2" className="rounded-photo" />
                <p>Rock Paper Scissors</p>
            </div>
        </div>
    );
}