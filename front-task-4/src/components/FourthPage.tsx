import React, {FC, useEffect, useState} from 'react';
import './fourthpagestyle.css';

interface ComicData {
    month: number;
    year: number;
    safe_title: string;
    alt: string;
    img: string;
    day: number;
}

const FourthPage: FC = () => {
    const [comicData, setComicData] = useState<ComicData | null>(null);
    const [daysPassed, setDaysPassed] = useState<number | null>(null);

    useEffect(() => {
        const fetchComicData = async () => {
            const email: string = 'da.stepanova@innopolis.university';
            const emailURL: URLSearchParams = new URLSearchParams({ email });

            try {
                const response: Response = await fetch(`https://fwd.innopolis.university/api/hw2?${emailURL.toString()}`);

                if (response.ok) {
                    const fetchedID: string = await response.text();
                    const dataResponse: Response = await fetch(`https://fwd.innopolis.university/api/comic?id=${fetchedID}`);

                    if (!dataResponse.ok) {
                        throw new Error("Failed to fetch comic data");
                    }

                    const fetchedData: ComicData = await dataResponse.json();
                    setComicData(fetchedData);

                    const neededDate = new Date(fetchedData.year, fetchedData.month - 1, fetchedData.day);
                    const currentDate: Date = new Date();
                    const differenceMs = currentDate.getTime() - neededDate.getTime();
                    const differenceDays: number = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
                    setDaysPassed(differenceDays);
                } else {
                    throw new Error("Failed to fetch comic ID");
                }
            } catch (error) {
                alert("Unexpected error while fetching the data: " + error);
            }
        };

        fetchComicData();
    }, []);

    return (
        <div id="fourth-page">
            <div className="fourth-container">
                <h1>Assignment 3 (TS version)</h1>
                <div className="title">{comicData?.safe_title}</div>
                {comicData && <img className="image" src={comicData.img} alt={comicData.alt} />}
                <div className="date">{daysPassed !== null ? `${daysPassed} days passed since publication` : ''}</div>
                <div className="altText">{comicData?.alt}</div>
            </div>
        </div>
    );
};

export default FourthPage;