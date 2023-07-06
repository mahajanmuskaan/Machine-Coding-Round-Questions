let container = document.querySelector(".cards");
async function fetchApiData() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false", {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })

        console.log(response.status);
        if (response.ok) {
            const data = await response.json();
            console.log(data.length);
            for (let i = 0; i < data.length; i++) {
                container.innerHTML += `<div class="card">
                    <div class="img">
                        <img src=${data[i].image}/>
                    </div>
                    <div class="details">
                        <div class="row1">
                            <h2 class="crypto-name">${data[i].name}</h2>
                            <h2 class="crypto-price">${data[i].current_price}</h2>
                        </div>
                        <div class="row2">
                            <p class="crypto-symbol">${data[i].symbol}</p>
                            <h2 class="crypto-percent">${data[i].price_change_percentage_24h}%</h2>
                        </div>
                    </div>
                </div>`
            }
        }
        else {
            console.error(`Error while getting response:${response.status}`);
        }
    } catch (error) {
        console.error(error);
    }

}

fetchApiData();
