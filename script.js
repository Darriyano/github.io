document.addEventListener('DOMContentLoaded', async () => {
        const email = 'da.stepanova@innopolis.university';
        const emailURL = new URLSearchParams({email});
        try {
            const response = await fetch(`https://fwd.innopolis.university/api/hw2?${emailURL.toString()}`);
            if (response) {
                const fetchedID = await response.text();
                const dataResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${fetchedID}`);
                if (!dataResponse) {
                    throw new Error("Failed to fetch comic data");
                }

                const fetchedData = await dataResponse.json();
                const neededDate = new Date(fetchedData.year, fetchedData.month - 1, fetchedData.day);
                const source = fetchedData.img;
                document.querySelector('.title').textContent = fetchedData.safe_title;
                document.querySelector('.date').textContent = neededDate.toLocaleString();
                document.querySelector('.image').src = source;
                document.querySelector('.image').alt = source.alt;
                document.querySelector('.altText').textContent = fetchedData.alt;
            } else {
                throw new Error("Failed to fetch comic ID");
            }
        } catch (error) {
            alert("Unexpected error while fetching the data: " + error);
        }
    }
)