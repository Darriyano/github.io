import React, {FC} from 'react';
import './thirdpagestyle.css';
import CardContainer from "./skillCard";

const ThirdPage: FC = () => {
    return (
        <div id="third-page">
            <div className="third-container">
                <div className="title-skills">My skills</div>
                    <CardContainer cards={[
                        {position: '274px', lposition: '114px', color: '#FFFFFF', nameText: 'HTML+CSS', bottomText: 'Frontend development', source: './HTML+CSS.svg', progress: '230px', left: '190px'},
                        {position: '507px', lposition: '150px', color: '#FFFFFF', nameText: 'Figma', bottomText: 'Web-site designs, interface designs', source: './figma.svg', progress: '420px', left: '155px'},
                        {position: '765px', lposition: '145px', color: '#FFFFFF', nameText: 'Photoshop', bottomText: 'Creating illustration, working with\n' +
                                'photo editing', source: './ph.svg', progress: '390px', left: '155px'},
                        {position: '274px', lposition: '978px', color: '#FFFFFF', nameText: 'Python', bottomText: 'Industrial programming, backend, game development\n', source: './python.svg', progress: '280px', left: '180px'},
                        {position: '507px', lposition: '978px', color: '#FFFFFF', nameText: 'C++/C', bottomText: 'Basics of language', source: './cplpl.svg', progress: '130px', left: '180px'},
                        {position: '765px', lposition: '978px', color: '#FFFFFF', nameText: 'Java', bottomText: 'Basics of language', source: './java.svg', progress: '140px', left: '180px'}]}/>
            </div>
        </div>
    );

};

export default ThirdPage;