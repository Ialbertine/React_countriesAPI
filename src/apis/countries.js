export const getCountries = async (page) => {
  const response = await fetch("https://restcountries.com/v3.1/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 200) {
    const data = await response.json();
    let countries = [];

    for (let index = 0; index < data.length; index++) {
      if (page === 1) {
        countries = data.slice(0, 50);
      } else if (page === 2) {
        countries = data.slice(50, 100);
      } else if (page === 3) {
        countries = data.slice(100, 150);
      } else if (page === 4) {
        countries = data.slice(150, 200);
      } else if (page === 5) {
        countries = data.slice(200, 250);
      }
    }

    return countries;
  }
};
