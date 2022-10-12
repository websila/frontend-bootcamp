/**
 * ! fetch();
 */
const getCoordsDate = (lat, long) => {
  const requestURL = fetch(
    `https://geocode.xyz/${lat},${long}?geoit=json&auth=288620523340197485312x69304`
  );
  const result = requestURL
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
getCoordsDate(35.7024848, 51.3998259);

/**
 * ! new Promise();
 */
const getCoordsDate2 = (lat, long) => {
  const requestPromise = new Promise((resolve, reject) => {
    const requestURL = fetch(
      `https://geocode.xyz/${lat},${long}?geoit=json&auth=288620523340197485312x69304`
    );
    resolve(requestURL);
  });
  requestPromise
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    });
};
getCoordsDate2(35.7024848, 51.3998259);

/**
 * ! async / await
 */
const getCoordsDate3 = async (lat, long) => {
  const requestURL = await fetch(
    `https://geocode.xyz/${lat},${long}?geoit=json&auth=288620523340197485312x69304`
  );
  jsonData = await requestURL.json();
  console.log(jsonData);
};
getCoordsDate2(35.7024848, 51.3998259);
