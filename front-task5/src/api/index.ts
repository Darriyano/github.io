import { formatDate } from "../lib/dateHelpers";

const MYEMAIL = "da.stepanova@innopolis.university";

interface ComicData {
    num: number;
    day: string;
    month: string;
    year: string;
    safe_title: string;
    alt: string;
    img: string;
    title: string;
    textContent: string;
}

async function fetchComicId(): Promise<number> {
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${MYEMAIL}`);
    const data = await response.text();
    const comicId = Number.parseInt(data);
    return comicId;
}

async function fetchComic(): Promise<ComicData> {
    const id = await fetchComicId();
    const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
    const data: ComicData = await response.json();
    return data;
}

function getDate(comic: ComicData): string {
    const date = new Date(`${comic.year}-${comic.month}-${comic.day}`);
    return formatDate(date);
}

export { type ComicData, fetchComic, getDate };
