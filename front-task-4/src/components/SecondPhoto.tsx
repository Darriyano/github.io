import React, {FC} from 'react';
import './secondpagestyle.css';

const SecondPhoto: FC = () => {
    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={'./photosecond.png'} className="photo_second" alt="My photo"></img>
        </div>
    );
};

export default SecondPhoto;