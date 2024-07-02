import React, {FC} from 'react';
import './fifthpagestyle.css';

const FifthPage: FC = () => {
    return (
        <div id="fifth-page">
            <div className="fifth-container">
                <div className="title-skills">My portfolio</div>

                <div className="container">
                    <div className="flex_dir">
                        <a href="https://github.com/Darriyano?tab=repositories" className="item"> <img src="./github.svg" alt='Some cringy text here'></img></a>
                        <div className='text_exp'>GitHub account with code examples and projects</div>
                    </div>

                    <div className="flex_dir">
                        <a href="https://www.deviantart.com/darriyano" className="item"><img src="./deviantart.svg" alt='Some cringy text here'></img></a>
                        <div className='text_exp'>Digital art portfolio:
                            illustrations and digital arts.
                        </div>
                    </div>

                    <div className="flex_dir">
                        <a href="https://www.figma.com/design/2fbLxbXW53smeMOfuA9lnI/%D0%9C%D0%BE%D0%B8-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D1%8B?node-id=0%3A1&t=IJNbnzCGwwaqYECe-1" className="item"><img src="./figma 2.svg" alt='Some cringy text here'></img></a>
                        <div className='text_exp'>Figma portfolio:
                            crucial projects I took part in</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FifthPage;