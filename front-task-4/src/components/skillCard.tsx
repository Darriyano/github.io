import React from 'react';

// Define props type for the Card component
interface CardProps {
    position: string;
    lposition: string;
    color: string;
    nameText: string;
    bottomText: string;
    source: string;
    progress: string;
    left: string;

}

// Card component
const Card: React.FC<CardProps> = ({position, lposition, color, nameText, bottomText, source, progress, left}) => {
    return (
        <div className='fonts'>
        <div style={{position: 'absolute', display: "flex", flexDirection: "row", top: position, left: lposition}}>
            <img src={source} alt='Some cringy text here' style={{left: lposition}}></img>
            <div style={{display: "flex", flexDirection: "column", left: left, position: 'absolute'}}>
            <div style={{color: color, fontSize: 40}}>{nameText}</div>
                <div className='progressBar'>
                    <div style={{width: progress, background: '#40BA21', height: 15, borderRadius: 5}}></div>
                </div>
                <div style={{color: color, fontSize: 30}}> {bottomText}</div>
            </div>
        </div>
        </div>
    );
};

// Define props type for the CardContainer component
interface CardContainerProps {
    cards: { position: string; lposition: string;  color: string; nameText: string; bottomText: string; source: string; progress: string; left: string}[];
}

// CardContainer component
const CardContainer: React.FC<CardContainerProps> = ({cards}) => {
    return (
        <div>
            {cards.map((card, index) => (
                <Card key={index} position={card.position} lposition={card.lposition} color={card.color} nameText={card.nameText}
                      bottomText={card.bottomText} source={card.source} progress={card.progress} left={card.left} />
            ))}
        </div>
    );
};

export default CardContainer;
