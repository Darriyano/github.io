"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    const email = 'da.stepanova@innopolis.university';
    const emailURL = new URLSearchParams({ email });
    try {
        const response = yield fetch(`https://fwd.innopolis.university/api/hw2?${emailURL.toString()}`);
        if (response.ok) {
            const fetchedID = yield response.text();
            const dataResponse = yield fetch(`https://fwd.innopolis.university/api/comic?id=${fetchedID}`);
            if (!dataResponse.ok) {
                throw new Error("Failed to fetch comic data");
            }
            const fetchedData = yield dataResponse.json();
            const neededDate = new Date(fetchedData.year, fetchedData.month - 1, fetchedData.day);
            const currentDate = new Date();
            const differenceMs = currentDate.getTime() - neededDate.getTime();
            const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
            const source = fetchedData.img;
            const titleElement = document.querySelector('.title');
            const dateElement = document.querySelector('.date');
            const imageElement = document.querySelector('.image');
            const altTextElement = document.querySelector('.altText');
            if (titleElement)
                titleElement.textContent = fetchedData.safe_title;
            if (dateElement)
                dateElement.textContent = String(differenceDays) + " days passed since publication";
            // if (dateElement) dateElement.textContent = neededDate.fromNow()
            if (imageElement) {
                imageElement.src = source;
                imageElement.alt = fetchedData.alt;
            }
            if (altTextElement)
                altTextElement.textContent = fetchedData.alt;
        }
        else {
            throw new Error("Failed to fetch comic ID");
        }
    }
    catch (error) {
        alert("Unexpected error while fetching the data: " + error);
    }
}));
