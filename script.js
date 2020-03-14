const endpoint = 'https://api.chucknorris.io/jokes/random';

function getQuote(){
    fetch(endpoint)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayQuote(data.icon_url,data.value);
    })
    .catch(function(e){
        console.error(e);
        ;
        
    })
}

function displayQuote(quoteI, quoteT){
    const quoteText = document.getElementById('quote-text');
    const quoteImage = document.getElementById('quote-image');
    quoteText.textContent = quoteT;
    quoteImage.src = `${quoteI}`;
    console.log(displayQuote);
}

const newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click',getQuote)