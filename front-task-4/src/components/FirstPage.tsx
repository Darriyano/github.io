import React, {FC} from 'react';
import './firstpagestyle.css';
import FirstPhoto from "./FirstPhoto";


const FirstPage: FC = () => {
    return (
        <div id="first-page">
            <div className="first-container">
                <FirstPhoto/>
                <div className="top-text">I am</div>
                <div className="medium-text"><span>Darya</span> Stepanova</div>
                <div className="final-text">web-designer and programmer</div>
            </div>
        </div>);
};

export default FirstPage;