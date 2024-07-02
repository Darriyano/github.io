import React, {FC, useState} from 'react';
import './sixthpagestyle.css';

interface labels {
    label: string;
    label2: string;
    label3: string;
}

const InputFields: React.FC<labels> = ({label, label2, label3}) => {
    const [textInput, setTextInput] = useState('');
    const [textInput2, setTextInput2] = useState('');

    const [textArea, setTextArea] = useState('');

    const changeText = (event: any) => {
        setTextInput(event.target.value);
    }

    const changeText2 = (event: any) => {
        setTextInput2(event.target.value);
    }

    const changeInput = (event: any) => {
        setTextArea(event.target.value);
    }

    const handling = (event: any) => {
        event.preventDefault()
        console.log(textInput);
        console.log(textInput2);
        console.log(textArea);
    }

    return (
        <div style={{display: "flex", flexDirection: "column", marginLeft: 150}}>
            <div style={{display: "flex", flexDirection: "row", marginBottom: 30}}>
                <input placeholder={label}
                       type='text'
                       value={textInput}
                       onChange={changeText}
                       className='input-text'
                       style={{marginRight: 50}}></input>
                <input placeholder={label3}
                       type='text'
                       onChange={changeText2}
                       value={textInput2}
                       className='input-text'></input>
            </div>

            <textarea placeholder={label2}
                      value={textArea}
                      onChange={changeInput}
                      className='input-area'></textarea>
            <button className="but" type='submit' onClick={handling}>Submit</button>
        </div>
    );
};

export default InputFields;