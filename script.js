const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://type.fit/api/quotes";

async function getQuote() {
    try {

        btnEl.innerText="Loading.....!!!";
        btnEl.ariaDisabled=true;
        const response = await fetch(apiURL);
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];

        const quoteContent = randomQuote.text;
        const quoteAuthor = randomQuote.author || "Unknown";  // Fallback to "Unknown" if author is null

        quoteEl.innerText = `"${quoteContent}"`;
        authorEl.innerText = `~ ${quoteAuthor}`;
        btnEl.innerText="Get a quote";
        btnEl.ariaDisabled=false;

        console.log(randomQuote);
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteEl.innerText = "Failed to fetch quote.";
        btnEl.innerText="Loading.....!!!";
        btnEl.ariaDisabled=true;
        authorEl.innerText = "";
    }
}

btnEl.addEventListener("click", getQuote);
