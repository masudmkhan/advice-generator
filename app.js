const displayedQuote = document.getElementById('quote');
const quoteId = document.getElementById('quote-number');
// quote on reload
fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => generateQuote(data))

// quote on click button
const displayQuote = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => generateQuote(data))
}

// generate new quote function
const generateQuote = (quote) => {
    let oldQuote = quoteId.innerText;
    if (`${quote.slip.id}` === oldQuote) {
        displayQuote();
    }
    else {
        quoteId.innerText = quote.slip.id;
        displayedQuote.innerText = `"${quote.slip.advice}"`;
    }
}
