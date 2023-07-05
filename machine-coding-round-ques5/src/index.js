import "./styles.css";

async function getWeatherInfo() {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=6374582dd1ce4be98ff115803230505&q=Seoul",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );
    console.log(response.status);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getWeatherInfo();
