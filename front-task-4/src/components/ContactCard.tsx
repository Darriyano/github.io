import React, {FC} from 'react';

interface ContactProps {
    icon : string;
    name : string;
    contact : string;

}

const Contact: React.FC<ContactProps> = ({icon, name, contact}) => {
    let link: string = "";

    if (name === "Telegram") {
        link = "https://web.telegram.org/a/";
    }  else if (name === "Gmail") {
        link = "https://mail.google.com/mail/u/0/#inbox";
    } else {
        link = "https://wa.me/+79194423991";
    }
    return (
            <div style={{display: "flex", flexDirection: "row"}} className="contacts">
                <img src={icon} alt='some cringe' style={{marginRight: 20}}></img>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <div className='name'>{name}</div>
                    <a href={link} className='cont'>{contact}</a>
                </div>
            </div>
    )
}

interface ContactContainerProps {
    info : {
        icon : string;
        name : string;
        contact : string;
    }[]
}

const ContactCard: React.FC<ContactContainerProps> = ({info}) => {
    return ( <>
        {info.map((inform, index) => (
            <Contact key={index} icon={inform.icon} name={inform.name} contact={inform.contact}/>
        ))}
    </>);

};

export default ContactCard;