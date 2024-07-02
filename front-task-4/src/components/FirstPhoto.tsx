import React, {FC} from 'react';
import './firstpagestyle.css';

const FirstPhoto: FC = () => {
    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={'./photomain.png'} className="photo_main" alt="My photo"></img>
        </div>
    );
};

export default FirstPhoto;
