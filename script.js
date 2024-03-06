//task: live transcript
function DisplayLiveTranscript() {
    let liveTranscriptArray = [
        `Welcome to the world of crypto...`,
        `Check the live prices of crypto-currencies...`,
        `Get the latest updates...`,
        `Seach your favourite crypto in seconds...`,
        `Create a watchlist of your favourite crypto-currency...`,
        `Investments are risky, invest at your own risk...`,
    ]
    async function displayTranscript() {
        for (let value of liveTranscriptArray) {
            let ele = document.getElementById('liveTranscriptDivP');
            ele.innerHTML = "";
            let i = 0;
            await new Promise((resolve) => {
                let intervalId = setInterval(() => {
                    if (i < value.length) {
                        ele.innerHTML += value[i++];
                    }
                    else {
                        setTimeout(() => {
                            clearInterval(intervalId);
                            resolve(1);
                        }, 1000)
                    }
                }, 30)
            })
            .then(null, (error) => {
                console.log("Error: ", error);
            })
        }
        displayTranscript();
    }
    displayTranscript();
}
DisplayLiveTranscript();


const cryptoAbbreviations = ["BTC","ETH","BNB","ADA","SOL","XRP","DOT","DOGE","AVAX","LUNA","MATIC","LTC","BCH","LINK","ALGO","UNI","TRX","MANA","ATOM"];

var halfURL = 'https://api.binance.com/api/v3/ticker/price?symbol=';
let intervalForCryptoId = setInterval(() => {
    async function fetchPrice() {
        for (let i = 0; i < cryptoAbbreviations.length; i++) {
            let url = halfURL + cryptoAbbreviations[i] + "USDT";
            let newId = document.getElementById('id-' + cryptoAbbreviations[i]);
            let p = await fetch(url);
            let res = await p.json();
            newId.innerHTML = parseFloat(res.price).toFixed(4);
        }
    }
    fetchPrice();
}, 1000);


