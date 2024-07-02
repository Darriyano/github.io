import React, {FC} from 'react';
import './secondpagestyle.css';
import SecondPhoto from "./SecondPhoto";
import EducationLogo from "./EducationLogo";

const SecondPage: FC = () => {
    return (
        <div id="second-page">
            <div className="second-container">
                <div className="title-about">About me</div>
                <SecondPhoto/>
                <div className="intro-text">
                    I am Darya, the student of Innopolis University.
                    Graduated from the best Perm krai school, finished
                    Yandex lyceum, successfully participated in web-design
                    and programming hackathons. Took part in designing unofficial
                    web-site design.  Also I worked with creating interactive web-screen
                    for museum, designed independent video game projects, etc.
                </div>
                <EducationLogo/>
            </div>
        </div>
    );
};

export default SecondPage;