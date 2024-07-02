import React, {FC} from 'react';
import './sixthpagestyle.css';
import ContactCard from "./ContactCard";
import InputFields from "./InputFields";

function sendInfo() {
    console.log("Clicked");
}

const SixthPage: FC = () => {
    return (
        <div id="sixth-page">
            <div className="sixth-container">
                <div className="title-about">Contact me</div>
                <div className='main-container'>
                    <div className="contain-contacts">

                        <ContactCard info={[{icon: './tg.svg', name: 'Telegram', contact: '@darriyano'},
                            {icon: './whatsapp.svg', name: 'WhatsApp', contact: '89194423991'},
                            {
                                icon: './gmail.svg',
                                name: 'Gmail',
                                contact: 'android.stepanova@gmail.com'
                            }]}></ContactCard>
                    </div>
                    <div>
                        <InputFields label='Input your name' label2='Leave questions here' label3='Leave your alias or e-mail'></InputFields>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SixthPage;