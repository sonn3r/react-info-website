import Photo1 from '../images/photo.png';
import Photo2 from '../images/photo.png';
import Photo3 from '../images/photo.png';

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <div className="portfolio-item">
                <img src={Photo1} alt="Project 1" className="rounded-photo" />
                <p>Project 1</p>
            </div>
            <div className="portfolio-item">
                <img src={Photo2} alt="Project 2" className="rounded-photo" />
                <p>Project 2</p>
            </div>
            <div className="portfolio-item">
                <img src={Photo3} alt="Project 3" className="rounded-photo" />
                <p>Project 3</p>
            </div>
            {/* Add more portfolio items as needed */}
        </div>
    );
}