// Circle.js
import './circle.css';

const Circle = ({position}) => {
    const circleStyle = {
        position: 'relative',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: '1'
    };

    if (position === 'left') {
        circleStyle.left = '-100px'; // Adjusted left position to overlap
        circleStyle.width = '500px';
        circleStyle.height = '300px';
        circleStyle.backgroundColor = '#4991A8';
        circleStyle.transform = 'rotate(45deg)';
    } else if (position === 'right') {
        circleStyle.right = '-150px';
        circleStyle.top = '-300px';
        circleStyle.width = '500px';
        circleStyle.height = '500px';
        circleStyle.backgroundColor = '#6C256D';
    }

    return <div className={`circle ${position}`} style={circleStyle}></div>;
};

export default Circle;
