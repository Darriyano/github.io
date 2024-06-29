interface ComicData {
    month: number;
    year: number;
    safe_title: string;
    alt: string;
    img: string;
    day: number;
}

document.addEventListener('DOMContentLoaded', async () => {
    const email: string = 'da.stepanova@innopolis.university';
    const emailURL: URLSearchParams = new URLSearchParams({email});

    try {
        const response: Response = await fetch(`https://fwd.innopolis.university/api/hw2?${emailURL.toString()}`);

        if (response.ok) {
            const fetchedID: string = await response.text();
            const dataResponse: Response = await fetch(`https://fwd.innopolis.university/api/comic?id=${fetchedID}`);

            if (!dataResponse.ok) {
                throw new Error("Failed to fetch comic data");
            }

            const fetchedData: ComicData = await dataResponse.json();

            const neededDate = new Date(fetchedData.year, fetchedData.month - 1, fetchedData.day);
            const currentDate: Date = new Date();
            const differenceMs = currentDate.getTime() - neededDate.getTime();

            const differenceDays: number = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

            const source: string = fetchedData.img;
            const titleElement: HTMLElement = document.querySelector('.title') as HTMLElement;
            const dateElement: HTMLElement = document.querySelector('.date') as HTMLElement;
            const imageElement: HTMLImageElement = document.querySelector('.image') as HTMLImageElement;
            const altTextElement: HTMLElement = document.querySelector('.altText') as HTMLElement;

            if (titleElement) titleElement.textContent = fetchedData.safe_title;
            if (dateElement) dateElement.textContent = String(differenceDays) + " days passed since publication";
            // if (dateElement) dateElement.textContent = neededDate.fromNow()
            if (imageElement) {
                imageElement.src = source;
                imageElement.alt = fetchedData.alt;
            }
            if (altTextElement) altTextElement.textContent = fetchedData.alt;
        } else {
            throw new Error("Failed to fetch comic ID");
        }
    } catch (error) {
        alert("Unexpected error while fetching the data: " + error);
    }
});
